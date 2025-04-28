import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Allow access to home page `/` and login page `/login`
  const isAuthPage = req.nextUrl.pathname.startsWith('/login');

  if (!token && !isAuthPage) {
    // Not logged in and trying to access a protected page
    return NextResponse.redirect(new URL('/login', req.url));
  }

  if (token && isAuthPage) {
    // Already logged in but trying to visit login page
    return NextResponse.redirect(new URL('/admin', req.url));
  }

  return NextResponse.next();
}

// Middleware config to match only certain routes
export const config = {
  matcher: [
    '/admin/:path*', // protect admin routes
    '/login',        // manage login route
  ],
};
