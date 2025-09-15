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

    // Fetch dashboard statistics
    const [
      totalProducts,
      totalOrders,
      totalUsers,
      ordersResult,
      lowStockProducts,
    ] = await Promise.all([
      // Total products
      db.product.count({
        where: { isActive: true },
      }),

      // Total orders
      db.order.count(),

      // Total users
      db.user.count({
        where: { role: 'CUSTOMER' },
      }),

      // Total revenue and recent orders
      db.order.aggregate({
        _sum: { total: true },
        _count: { _all: true },
      }),

      // Low stock products (less than 10 items)
      db.product.findMany({
        where: {
          isActive: true,
          trackQuantity: true,
          quantity: { lt: 10 },
        },
        orderBy: { quantity: 'asc' },
        take: 10,
        select: {
          id: true,
          name: true,
          quantity: true,
          sku: true,
        },
      }),
    ]);

    // Fetch recent orders
    const recentOrders = await db.order.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });

    const totalRevenue = ordersResult._sum.total || 0;

    return NextResponse.json({
      totalProducts,
      totalOrders: ordersResult._count._all,
      totalUsers,
      totalRevenue,
      recentOrders,
      lowStockProducts,
    });
  } catch (error) {
    console.error('Admin dashboard error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
