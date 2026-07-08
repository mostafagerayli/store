import { prisma } from "@/app/lib/prisma";
import { ResetPasswordSchema } from "@/validations/auth.validation";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";


interface ResetPasswordTokenPayload extends JwtPayload {
  id: string;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = ResetPasswordSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const { token, newPassword } = result.data;

    const resetSecret = process.env.RESET_PASSWORD_SECRET;

    if (!resetSecret) {
      throw new Error("RESET_PASSWORD_SECRET is not configured");
    }

    // تایید توکن
    const decoded = jwt.verify(token, resetSecret) as ResetPasswordTokenPayload;

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
    const message = error instanceof Error ? error.message : "Unknown error";

    console.error("Reset password error:", message);

    return NextResponse.json(
      {
        error: "Failed to reset password",
      },
      {
        status: 500,
      },
    );
  }
}
