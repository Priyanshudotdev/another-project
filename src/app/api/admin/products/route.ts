import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookies } from '@/lib/auth/jwt';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const session = await getUserFromCookies();
    if (!session?.sub) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 },
      );
    }

    // Check if user is admin
    if (session.role !== 'ADMIN' && session.role !== 'SUPER_ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 },
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || '';
    const category = searchParams.get('category') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') || 'desc';

    // Build where clause
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { sku: { contains: search, mode: 'insensitive' } },
        { description: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (status === 'active') {
      where.isActive = true;
    } else if (status === 'inactive') {
      where.isActive = false;
    } else if (status === 'featured') {
      where.featured = true;
    }

    if (category !== 'all') {
      where.category = {
        slug: category,
      };
    }

    // Fetch products with pagination
    const [products, total] = await Promise.all([
      db.product.findMany({
        where,
        include: {
          category: {
            select: {
              id: true,
              name: true,
              slug: true,
            },
          },
        },
        orderBy: {
          [sortBy]: sortOrder,
        },
        skip: offset,
        take: limit,
      }),
      db.product.count({ where }),
    ]);

    return NextResponse.json({
      products,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Admin products fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await getUserFromCookies();
    if (!session?.sub) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 },
      );
    }

    // Check if user is admin
    if (session.role !== 'ADMIN' && session.role !== 'SUPER_ADMIN') {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 },
      );
    }

    const body = await request.json();
    const {
      name,
      description,
      price,
      comparePrice,
      sku,
      barcode,
      trackQuantity,
      quantity,
      images,
      featured,
      categoryId,
      slug,
      metaTitle,
      metaDescription,
      tags,
      weight,
      dimensions,
    } = body;

    // Validate required fields
    if (!name || !price || !sku || !categoryId || !slug) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 },
      );
    }

    // Check if SKU already exists
    const existingProduct = await db.product.findUnique({
      where: { sku },
    });

    if (existingProduct) {
      return NextResponse.json(
        { error: 'Product with this SKU already exists' },
        { status: 400 },
      );
    }

    // Check if slug already exists
    const existingSlug = await db.product.findUnique({
      where: { slug },
    });

    if (existingSlug) {
      return NextResponse.json(
        { error: 'Product with this slug already exists' },
        { status: 400 },
      );
    }

    // Create product
    const product = await db.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        comparePrice: comparePrice ? parseFloat(comparePrice) : null,
        sku,
        barcode,
        trackQuantity: trackQuantity ?? true,
        quantity: quantity ?? 0,
        images: images ? JSON.stringify(images) : null,
        featured: featured ?? false,
        isActive: true,
        categoryId,
        slug,
        metaTitle,
        metaDescription,
        tags: tags ? JSON.stringify(tags) : null,
        weight: weight ? parseFloat(weight) : null,
        dimensions: dimensions ? JSON.stringify(dimensions) : null,
      },
      include: {
        category: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json({
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    console.error('Product creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
