import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("accessToken")?.value;

  if (!token) {
    if (
      pathname.startsWith("/shopingCart") ||
      pathname.startsWith("/dashboard")
    ) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);

      // گرفتن role واقعی از DB
      const result = await pool.query("SELECT role FROM users WHERE id=$1",
        [decoded.id]
      );

      const userRole = result.rows[0]?.role;

      // مسیر dashboard فقط برای admin
      if (pathname.startsWith("/dashboard") && userRole !== "admin") {
        return NextResponse.redirect(new URL("/login", request.nextUrl));
      }
    }

    return NextResponse.next();
  } catch (err) {
    console.error("Middleware JWT error:", err.message);
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/shopingCart/:path*"],
};
