import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("accessToken")?.value;

  // اگر توکن وجود ندارد
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.ACCESS_SECRET);

    const { payload } = await jwtVerify(token, secret);
    const userRole = payload.role;

    // محافظت از dashboard فقط برای admin
    if (pathname.startsWith("/dashboard") && userRole !== "admin") {
      return NextResponse.redirect(new URL("/404", request.url));
    }

    return NextResponse.next();
  } catch (error) {
    // اگر توکن نامعتبر یا منقضی باشد
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};