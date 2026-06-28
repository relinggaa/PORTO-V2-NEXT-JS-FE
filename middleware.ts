import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Add paths that require authentication here
const protectedPaths = ['/dashboard'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  const isProtectedPath = protectedPaths.some((path) => pathname.startsWith(path));
  
  if (isProtectedPath) {
    // Check for the access token in cookies
    const token = request.cookies.get('access_token')?.value || request.cookies.get('refresh_token')?.value;
    
    if (!token) {
      // If no token exists, redirect to login
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }
  
  // Also protect the login route (if they are already logged in, redirect to dashboard)
  if (pathname === '/login') {
    const token = request.cookies.get('access_token')?.value || request.cookies.get('refresh_token')?.value;
    if (token) {
      const dashboardUrl = new URL('/dashboard/home', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
