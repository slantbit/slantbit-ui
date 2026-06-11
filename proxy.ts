import { auth } from "@/auth";

export default auth((req : any) => {
  const isAuthenticated = !!req.auth;
  const isAdmin = req.auth?.user?.role === "ADMIN";
  const { pathname } = req.nextUrl;

  const PUBLIC_ROUTES = ["/", "/login", "/register", "/verify-otp"];
  if (PUBLIC_ROUTES.includes(pathname)) return;

  if (!isAuthenticated) {
    return Response.redirect(new URL("/login", req.url));
  }

  if (pathname.startsWith("/admin") && !isAdmin) {
    return Response.redirect(new URL("/dashboard", req.url));
  }
}) as any;
//  👆 yahan