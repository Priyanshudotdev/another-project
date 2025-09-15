import { NextRequest, NextResponse } from 'next/server';
import { getUserFromCookies } from '@/lib/auth/jwt';
import { db } from '@/lib/db';
import { OrderStatus, PaymentStatus, AddressType } from '@prisma/client';

export async function POST(request: NextRequest) {
  try {
    const session = await getUserFromCookies();
    if (!session?.sub) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 },
      );
    }

    const { items, shippingAddress, subtotal, shipping, tax, total } =
      await request.json();

    // Validate input
    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid cart items' },
        { status: 400 },
      );
    }

    if (!shippingAddress || !subtotal || !total) {
      return NextResponse.json(
        { error: 'Missing required order information' },
        { status: 400 },
      );
    }

    // Generate unique order number
    const orderNumber = `ORD-${Date.now()}-${Math.random()
      .toString(36)
      .substr(2, 9)
      .toUpperCase()}`;

    // Create shipping address
    const address = await db.address.create({
      data: {
        userId: session.sub,
        type: AddressType.SHIPPING,
        firstName: shippingAddress.firstName,
        lastName: shippingAddress.lastName,
        company: shippingAddress.company || null,
        address1: shippingAddress.address1,
        address2: shippingAddress.address2 || null,
        city: shippingAddress.city,
        state: shippingAddress.state,
        postalCode: shippingAddress.postalCode,
        country: shippingAddress.country,
        phone: shippingAddress.phone,
        isDefault: false,
      },
    });

    // Create order
    const order = await db.order.create({
      data: {
        orderNumber,
        userId: session.sub,
        addressId: address.id,
        status: OrderStatus.PENDING,
        paymentStatus: PaymentStatus.PENDING,
        subtotal,
        shipping,
        tax,
        total,
        currency: 'USD',
      },
    });

    // Create order items
    const orderItems = await Promise.all(
      items.map((item: any) =>
        db.orderItem.create({
          data: {
            orderId: order.id,
            productId: item.id,
            quantity: item.quantity,
            price: item.price,
          },
        }),
      ),
    );

    // Update product quantities (in a real app, you'd want to handle inventory properly)
    await Promise.all(
      items.map((item: any) =>
        db.product.update({
          where: { id: item.id },
          data: {
            quantity: {
              decrement: item.quantity,
            },
          },
        }),
      ),
    );

    return NextResponse.json({
      message: 'Order created successfully',
      orderNumber,
      orderId: order.id,
    });
  } catch (error) {
    console.error('Order creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const session = await getUserFromCookies();
    if (!session?.sub) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 },
      );
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = (page - 1) * limit;

    const orders = await db.order.findMany({
      where: {
        userId: session.sub,
      },
      include: {
        items: {
          include: {
            product: {
              select: {
                id: true,
                name: true,
                slug: true,
                images: true,
              },
            },
          },
        },
        address: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      skip: offset,
      take: limit,
    });

    const total = await db.order.count({
      where: {
        userId: session.sub,
      },
    });

    return NextResponse.json({
      orders,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Orders fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
