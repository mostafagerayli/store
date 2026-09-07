import { prisma } from "@/app/lib/prisma";
import { LoginSchema } from "@/validations/auth.validation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const result = LoginSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten(),
        },
        { status: 400 },
      );
    }

    const { phone, password } = result.data;

    // پیدا کردن کاربر از دیتابیس
    const user = await prisma.users.findUnique({
      where: {
        phone,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 401 },
      );
    }

    // بررسی رمز عبور
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return NextResponse.json(
        { error: "Incorrect password" },
        { status: 401 },
      );
    }

    const accessSecret = process.env.ACCESS_SECRET;
    const refreshSecret = process.env.REFRESH_SECRET;

    if (!accessSecret || !refreshSecret) {
      throw new Error("JWT secrets are not configured");
    }

    // Access Token
    const accessToken = jwt.sign(
      {
        id: user.id,
        role: user.role,
        name: user.name,
      },
      accessSecret,
      {
        expiresIn: "15m",
      },
    );

    // Refresh Token
    const refreshToken = jwt.sign(
      {
        id: user.id,
      },
      refreshSecret,
      {
        expiresIn: "7d",
      },
    );

    const response = NextResponse.json({
      success: true,
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    });

    // Access Token Cookie
    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 15 * 60,
    });

    // Refresh Token Cookie
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown error";

    console.error("Login error:", message);

    return NextResponse.json(
      {
        error: "Database error",
        details: message,
      },
      {
        status: 500,
      },
    );
  }
}