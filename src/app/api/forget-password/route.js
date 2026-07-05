import { prisma } from "@/app/lib/prisma";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json(
        { error: "Phone is required" },
        { status: 400 }
      );
    }

    // پیدا کردن کاربر
    const user = await prisma.users.findUnique({
      where: { phone },
    });

    // برای جلوگیری از user enumeration
    if (!user) {
      return NextResponse.json(
        { message: "If user exists, reset link will be sent" },
        { status: 200 }
      );
    }

    // بررسی secret
    const secret = process.env.RESET_PASSWORD_SECRET;
    if (!secret) {
      throw new Error("RESET_PASSWORD_SECRET is not defined");
    }

    // ساخت توکن
    const resetToken = jwt.sign(
      { id: user.id },
      secret,
      { expiresIn: "15m" }
    );

    // base url برای production
    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;

    // TODO: اینجا باید ایمیل یا SMS واقعی بزنی
    console.log("🔐 Reset Password Link:", resetLink);

    return NextResponse.json({
      message: "Reset link generated successfully",
    });
  } catch (err) {
    console.error("RESET PASSWORD ERROR:", err);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}