import { NextRequest, NextResponse } from 'next/server';

// Public routes that don't require auth
const PUBLIC_PATHS: RegExp[] = [
  /^\/auth\//,
  /^\/api\/auth\//,
  /^\/api\/health\/?$/,
  /^\/public\//,
  /^\/robots\.txt$/,
  /^\/_next\//,
  /^\/favicon\.ico$/,
];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isPublic = PUBLIC_PATHS.some((re) => re.test(pathname));
  if (isPublic) return NextResponse.next();

  const token = req.cookies.get('auth_token')?.value;
  if (!token) {
    const signUpUrl = new URL('/auth/signup', req.url);
    signUpUrl.searchParams.set('callbackUrl', pathname || '/');
    return NextResponse.redirect(signUpUrl);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)'],
};
