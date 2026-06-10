// middleware.ts (root mein)
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_ROUTES = ["/", "/login", "/register", "/verify-otp"]
const ADMIN_ROUTES = ["/admin"]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("auth_token")?.value

  // Public routes — allow
  if (PUBLIC_ROUTES.includes(pathname)) return NextResponse.next()

  // No token — redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Admin routes — check admin role
  if (pathname.startsWith("/admin")) {
    const isAdmin = request.cookies.get("is_admin")?.value === "true"
    if (!isAdmin) return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}