import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "@/lib/session";

const publicRoutes = ["/login", "/signup"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  const isStaticAsset = path.startsWith("/_next") || path === "/favicon.ico";
  if (isStaticAsset) return NextResponse.next();

  const cookie = (await cookies()).get("token")?.value;
  const decoded = await decrypt(cookie);

  if (!isPublicRoute && !decoded?.userId) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && decoded?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  const requestHeaders = new Headers(req.headers);
  if (decoded && typeof decoded.userId === "string") {
    requestHeaders.set("x-user-id", decoded.userId);
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"],
};
