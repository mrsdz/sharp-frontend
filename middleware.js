import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import getUserPermissions from "@/api/user/getUserPermissions";
import { PROTECTED_ROUTES } from "@/constants/permissions";

// Helper functions to improve readability and maintainability
const createRedirectResponse = (url, request) => {
  return NextResponse.redirect(new URL(url, request.url));
};

const parsePathComponents = (pathname) => {
  const [, , storeId, ...rest] = pathname.split("/");
  const afterId = rest.length ? `/${rest.join("/")}` : "/";
  return { storeId, afterId };
};

const hasRequiredPermissions = (userPermissions, requiredPermissions) => {
  return requiredPermissions.every((perm) => userPermissions.includes(perm));
};

export async function middleware(request) {
  try {
    const token = request.cookies.get("token")?.value;
    
    // Handle unauthenticated users
    if (!token) {
      return createRedirectResponse("/", request);
    }

    // Parse URL components
    const { pathname } = request.nextUrl;
    const { storeId, afterId } = parsePathComponents(pathname);

    // Fetch user permissions
    const permissions = await getUserPermissions({ token, storeId });

    // Handle unauthorized/expired token
    if (permissions.status === 401) {
      cookies().delete("token");
      return createRedirectResponse("/", request);
    }

    // Check route permissions
    const requiredPermissions = PROTECTED_ROUTES[afterId];
    if (requiredPermissions && !hasRequiredPermissions(permissions, requiredPermissions)) {
      return createRedirectResponse("/access-denied", request);
    }

    // Allow the request to proceed
    const response = NextResponse.next();
    response.cookies.set("permissions", JSON.stringify(permissions));
    return response;

  } catch (error) {
    console.error("Middleware error:", error);
    return createRedirectResponse("/error", request);
  }
}

export const config = {
  matcher: "/dashboard/:id/:path*",
};
