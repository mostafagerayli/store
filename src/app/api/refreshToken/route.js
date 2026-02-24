import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { pool } from "@/app/lib/db";

export async function POST(req) {
  try {
    // 1️⃣ گرفتن refresh token از cookie
    const refreshToken = req.cookies.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { error: "No refresh token" },
        { status: 401 }
      );
    }

    // 2️⃣ بررسی اعتبار refresh token
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET
    );

    // 3️⃣ گرفتن role واقعی از دیتابیس
    const result = await pool.query(
      "SELECT id, role FROM users WHERE id=$1",
      [decoded.id]
    );

    if (result.rows.length === 0) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    const user = result.rows[0];

    // 4️⃣ ساخت access token جدید با role آپدیت‌شده
    const newAccessToken = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    const response = NextResponse.json({ success: true });

    // 5️⃣ ست کردن access جدید داخل cookie
    response.cookies.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure:false,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    return response;

  } catch (err) {
    return NextResponse.json(
      { error: "Invalid refresh token" },
      { status: 403 }
    );
  }
}