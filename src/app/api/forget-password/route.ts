import { prisma } from "@/app/lib/prisma";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

interface ForgotPasswordDto {
  phone: string;
}

export async function POST(req: NextRequest) {
  try {
    const { phone }: ForgotPasswordDto = await req.json();

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

    // برای جلوگیری از User Enumeration
    if (!user) {
      return NextResponse.json(
        {
          message: "If user exists, reset link will be sent",
        },
        {
          status: 200,
        }
      );
    }

    const secret = process.env.RESET_PASSWORD_SECRET;

    if (!secret) {
      throw new Error("RESET_PASSWORD_SECRET is not defined");
    }

    // ساخت توکن
    const resetToken = jwt.sign(
      {
        id: user.id,
      },
      secret,
      {
        expiresIn: "15m",
      }
    );

    const baseUrl =
      process.env.NEXT_PUBLIC_BASE_URL ??
      "http://localhost:3000";

    const resetLink = `${baseUrl}/reset-password?token=${resetToken}`;

    // TODO: ارسال SMS یا Email
    console.log("🔐 Reset Password Link:", resetLink);

    return NextResponse.json({
      success: true,
      message: "Reset link generated successfully",
    });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown error";

    console.error("RESET PASSWORD ERROR:", message);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      {
        status: 500,
      }
    );
  }
}