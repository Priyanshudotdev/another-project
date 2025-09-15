import { NextResponse } from 'next/server';
import { getUserFromCookies } from '@/lib/auth/jwt';
import { db } from '@/lib/db';

export async function GET() {
  try {
    const session = await getUserFromCookies();
    if (!session?.sub) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 },
      );
    }

    const user = await db.user.findUnique({
      where: { id: session.sub },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const addresses = await db.address.findMany({
      where: { userId: session.sub },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ user, addresses });
  } catch (error) {
    console.error('Profile fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
