import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { signToken, setAuthCookie } from '@/lib/auth/jwt';

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST,OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Cache-Control': 'no-store',
    },
  });
}

export async function POST(request: NextRequest) {
  const requestId = crypto.randomUUID();
  const started = Date.now();
  try {
    const json = await request.json().catch(() => null);
    if (!json) {
      return NextResponse.json(
        { error: 'Invalid JSON body', requestId },
        { status: 400 },
      );
    }
    const { email, password } = json as { email?: string; password?: string };

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required', requestId },
        { status: 400 },
      );
    }

    const user = await db.user.findUnique({ where: { email } });

    if (!user || !user.password) {
      return NextResponse.json(
        { error: 'Invalid email or password', requestId },
        { status: 401 },
      );
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return NextResponse.json(
        { error: 'Invalid email or password', requestId },
        { status: 401 },
      );
    }

    const token = await signToken({
      sub: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    });

    await setAuthCookie(token);

    return NextResponse.json(
      {
        message: 'Logged in successfully',
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
        },
        requestId,
        ms: Date.now() - started,
      },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error) {
    console.error('[login] error', { requestId, error });
    return NextResponse.json(
      { error: 'Internal server error', requestId },
      { status: 500 },
    );
  }
}
