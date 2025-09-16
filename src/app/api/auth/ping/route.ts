import { NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET() {
  const started = Date.now();
  try {
    // lightweight query just to test connectivity
    await db.user.count();
    return NextResponse.json({ ok: true, ms: Date.now() - started });
  } catch (error: any) {
    return NextResponse.json(
      { ok: false, error: String(error), ms: Date.now() - started },
      { status: 500 },
    );
  }
}
