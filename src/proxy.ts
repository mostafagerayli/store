import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  const loginUrl = new URL("/login", request.url);

  const accessSecret = process.env.ACCESS_SECRET;

  if (!accessSecret) {
    console.error("ACCESS_SECRET is not configured");
    return NextResponse.redirect(loginUrl);
  }

  const secret = new TextEncoder().encode(accessSecret);

  /*
   * 1. Access Token
   */

  if (accessToken) {
    try {
      const { payload } = await jwtVerify(accessToken, secret);

      if (
        pathname.startsWith("/dashboard") &&
        payload.role !== "admin"
      ) {
        return NextResponse.redirect(
          new URL("/404", request.url)
        );
      }

      return NextResponse.next();
    } catch {
      console.log("Access token expired/invalid");
    }
  }

  /*
   * 2. Access Token نداریم یا منقضی شده
   *    برو سراغ Refresh Token
   */

  if (!refreshToken) {
    console.log("No refresh token");
    return NextResponse.redirect(loginUrl);
  }

  try {
    const refreshResponse = await fetch(
      new URL("/api/v1/refreshToken", request.url),
      {
        method: "POST",
        headers: {
          Cookie: `refreshToken=${refreshToken}`,
        },
        cache: "no-store",
      }
    );

    console.log(
      "Refresh response:",
      refreshResponse.status
    );

    if (!refreshResponse.ok) {
      return NextResponse.redirect(loginUrl);
    }

    /*
     * Access Token جدیدی که Refresh API ساخته
     */

    const setCookie = refreshResponse.headers.get(
      "set-cookie"
    );

    console.log("Set-Cookie:", setCookie);

    if (!setCookie) {
      console.log("No Set-Cookie from refresh API");
      return NextResponse.redirect(loginUrl);
    }

    const match = setCookie.match(
      /(?:^|,\s*)accessToken=([^;]+)/
    );

    if (!match) {
      console.log("New access token not found");
      return NextResponse.redirect(loginUrl);
    }

    const newAccessToken = match[1];

    /*
     * Access Token جدید را Verify می‌کنیم
     */

    const { payload } = await jwtVerify(
      newAccessToken,
      secret
    );

    if (
      pathname.startsWith("/dashboard") &&
      payload.role !== "admin"
    ) {
      return NextResponse.redirect(
        new URL("/404", request.url)
      );
    }

    /*
     * Access Token جدید را روی Response مرورگر می‌گذاریم
     */

    const response = NextResponse.next();

    response.cookies.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    console.log("Access token refreshed successfully");

    return response;
  } catch (error) {
    console.error("Proxy refresh error:", error);

    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  matcher: ["/dashboard/:path*"],
};