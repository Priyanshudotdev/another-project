import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';
import { UserRole } from '@prisma/client';
import { z } from 'zod';

const RegisterSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(100),
});

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
  const started = Date.now();
  const requestId = crypto.randomUUID();
  try {
    const json = await request.json().catch(() => null);
    if (!json) {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
    }
    const parsed = RegisterSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Validation failed', issues: parsed.error.flatten() },
        { status: 400 },
      );
    }
    const { name, email, password } = parsed.data;

    // Check if user already exists
    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await db.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: UserRole.CUSTOMER,
        emailVerified: false,
      },
    });

    await db.cart.create({ data: { userId: user.id } });

    const { password: _pw, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: 'User created successfully',
        user: userWithoutPassword,
        requestId,
        ms: Date.now() - started,
      },
      { headers: { 'Cache-Control': 'no-store' } },
    );
  } catch (error: any) {
    const code = error?.code;
    if (code === 'P2002') {
      return NextResponse.json(
        { error: 'Email already in use', requestId },
        { status: 409 },
      );
    }
    console.error('[register] error', { requestId, error });
    return NextResponse.json(
      { error: 'Internal server error', requestId },
      { status: 500 },
    );
  }
}
