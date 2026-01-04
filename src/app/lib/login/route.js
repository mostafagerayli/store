import { NextResponse } from "next/server";

export async function POST(req) {
  const { phone_number, password } = await req.json();

  // ارسال درخواست به backend واقعی
  const res = await fetch(
    "https://optional-faculty-produced-expansys.trycloudflare.com/users/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone_number, password }),
    }
  );

  const data = await res.json();

  if (!res.ok || !data.tokens) {
    return NextResponse.json(
      { message: data.message || "Login failed" },
      { status: res.status }
    );
  }

  // ست کردن HttpOnly cookie
  const response = NextResponse.json({ success: true });
  response.cookies.set({
    name: "token",
    value: data.tokens,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24, // 1 روز
  });

  return response;
}
