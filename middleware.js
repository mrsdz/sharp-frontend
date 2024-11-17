import { NextResponse } from "next/server";
// api
import getUserPermissions from "@/api/user/getUserPermissions";
// constants
import { PROTECTED_ROUTES } from "@/constants/permissions";

export async function middleware(request) {
  const isAuthenticated = request.cookies.has("token");

  if (isAuthenticated) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get("token")?.value || null;
    const storeId = pathname.split("/")[2];
    const afterId = pathname.match(/^\/dashboard\/[^/]+(\/.*)?/)[1];

    const permissions = await getUserPermissions({ token, storeId });
    const allowedRoles = PROTECTED_ROUTES[afterId];

    if (allowedRoles && !allowedRoles.every((perm) => permissions.includes(perm))) {
      return NextResponse.redirect(new URL("/access-denied", request.url));
    }

    const next = NextResponse.next();

    next.cookies.set("permissions", JSON.stringify(permissions));

    return next;
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/dashboard/:id/:path*",
};
