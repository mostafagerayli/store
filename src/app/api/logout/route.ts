import { NextResponse } from "next/server";

export async function POST() {
  try {
    // از NextResponse استفاده می‌کنیم
    const response = NextResponse.json({ message: "Logged out" });

    // پاک کردن کوکی‌ها
    response.cookies.set("accessToken", "", {
      httpOnly: true,
      path: "/",
      maxAge: 0,
    });
    response.cookies.set("refreshToken", "", {
      httpOnly: true,
      path: "/",
      maxAge: 0,
    });

    return response;
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";

    console.error("Logout error:", message);

    return NextResponse.json(
      {
        error: "Logout failed",
        details: message,
      },
      {
        status: 500,
      },
    );
  }
}
