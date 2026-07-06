import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

interface ResetPasswordDto {
  token: string;
  newPassword: string;
}

interface ResetPasswordTokenPayload extends JwtPayload {
  id: string;
}

export async function POST(req: NextRequest) {
  try {
    const { token, newPassword }: ResetPasswordDto = await req.json();

    if (!token || !newPassword) {
      return NextResponse.json(
        { error: "Token and new password are required" },
        { status: 400 }
      );
    }

    const resetSecret = process.env.RESET_PASSWORD_SECRET;

    if (!resetSecret) {
      throw new Error("RESET_PASSWORD_SECRET is not configured");
    }

    // تایید توکن
    const decoded = jwt.verify(
      token,
      resetSecret
    ) as ResetPasswordTokenPayload;

    // هش کردن رمز جدید
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // آپدیت رمز در دیتابیس
    await prisma.users.update({
      where: {
        id: decoded.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Password updated successfully!",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown error";

    console.error("Reset password error:", message);

    return NextResponse.json(
      {
        error: "Failed to reset password",
      },
      {
        status: 500,
      }
    );
  }
}