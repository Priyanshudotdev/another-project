import { NextResponse } from 'next/server';
import { getUserFromCookies } from '@/lib/auth/jwt';

export async function GET() {
  const payload = await getUserFromCookies();
  if (!payload) {
    return NextResponse.json({ user: null }, { status: 401 });
  }
  return NextResponse.json({ user: payload });
}
