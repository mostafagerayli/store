import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { phone, password } = await req.json();

    if (!phone || !password) {
      return NextResponse.json(
        { error: "Phone and password required" },
        { status: 400 },
      );
    }
    //پیدا کردن کاربر از دیتابیس
    const user = await prisma.users.findUnique({
      where: {
        phone: phone,
      },
    });
    //اگر نبود
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 401 });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 401 },
      );
    }

    // 🔐 ساخت توکن‌ها
    const accessToken = jwt.sign(
      {
        id: user.id,
        role: user.role,
        name: user.name,
      },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" },
    );

    const refreshToken = jwt.sign({ id: user.id }, process.env.REFRESH_SECRET, {
      expiresIn: "7d",
    });

    // ✅ ساخت response
    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    });

    // ✅ ست کردن Access Token داخل Cookie
    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15, // 15 دقیقه
    });

    // ✅ ست کردن Refresh Token داخل Cookie
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 روز
    });

    return response;
  } catch (err) {
    console.error("Login error:", err.message);

    return NextResponse.json(
      { error: "Database error", details: err.message },
      { status: 500 },
    );
  }
}
