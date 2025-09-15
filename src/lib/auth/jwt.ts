import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'auth_token';
const DEFAULT_EXP = '7d'; // 7 days

function getSecret() {
  const secret =
    process.env.AUTH_SECRET ||
    process.env.JWT_SECRET ||
    process.env.NEXTAUTH_SECRET ||
    'dev-secret';
  return new TextEncoder().encode(secret);
}

export type TokenPayload = {
  sub: string; // user id
  email: string;
  name?: string | null;
  role?: string | null;
} & JWTPayload;

export async function signToken(
  payload: TokenPayload,
  expiresIn: string = DEFAULT_EXP,
) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(getSecret());
}

export async function verifyToken<T extends JWTPayload = TokenPayload>(
  token: string,
): Promise<T> {
  const { payload } = await jwtVerify(token, getSecret());
  return payload as T;
}

export async function setAuthCookie(token: string) {
  const isProd = process.env.NODE_ENV === 'production';
  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: isProd,
    // Max-Age ~ 7 days
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAuthCookie() {
  (await cookies()).set(COOKIE_NAME, '', {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 0,
  });
}

export async function getUserFromCookies() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const payload = await verifyToken<TokenPayload>(token);
    return payload;
  } catch {
    return null;
  }
}

export { COOKIE_NAME };
