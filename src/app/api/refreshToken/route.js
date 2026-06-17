import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/app/lib/prisma";

export async function POST(req) {
  try {
    // 1️⃣ گرفتن refresh token از cookie
    const refreshToken = req.cookies.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json({ error: "No refresh token" }, { status: 401 });
    }

    // 2️⃣ بررسی اعتبار refresh token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_SECRET);

    // 3️⃣ گرفتن role واقعی از دیتابیس
    const user = await prisma.users.findUnique({
      where: {
        id: decoded.id,
      },
      select: {
        id: true,
        role: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 4️⃣ ساخت access token جدید با role آپدیت‌شده
    const newAccessToken = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" },
    );

    const response = NextResponse.json({ success: true });

    // 5️⃣ ست کردن access جدید داخل cookie
    response.cookies.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    return response;
  } catch {
    return NextResponse.json(
      { error: "Invalid refresh token" },
      { status: 403 },
    );
  }
}
