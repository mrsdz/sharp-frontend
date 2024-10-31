import { NextResponse } from "next/server";

export function middleware(request) {
  const isAuthenticated = request.cookies.has("token");

  if (isAuthenticated) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/dashboard/:path*",
};
