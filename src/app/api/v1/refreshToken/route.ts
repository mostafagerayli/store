import { prisma } from "@/app/lib/prisma";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

interface RefreshTokenPayload extends JwtPayload {
  id: string;
}

export async function POST(req: NextRequest) {
  try {
    const accessSecret = process.env.ACCESS_SECRET;
    const refreshSecret = process.env.REFRESH_SECRET;

    if (!accessSecret || !refreshSecret) {
      throw new Error("JWT secrets are not configured");
    }

    // گرفتن Refresh Token از Cookie
    const refreshToken = req.cookies.get("refreshToken")?.value;

    if (!refreshToken) {
      return NextResponse.json(
        { error: "No refresh token" },
        { status: 401 }
      );
    }

    // بررسی اعتبار Refresh Token
    const decoded = jwt.verify(
      refreshToken,
      refreshSecret
    ) as RefreshTokenPayload;

    // گرفتن اطلاعات کاربر از دیتابیس
    const user = await prisma.users.findUnique({
      where: {
        id: decoded.id,
      },
      select: {
        id: true,
        name: true,
        role: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // ساخت Access Token جدید
    const newAccessToken = jwt.sign(
      {
        id: user.id,
        name: user.name,
        role: user.role,
      },
      accessSecret,
      {
        expiresIn: "15m",
      }
    );

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("accessToken", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    return response;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unknown error";

    console.error("Refresh token error:", message);

    return NextResponse.json(
      {
        error: "Invalid refresh token",
      },
      {
        status: 403,
      }
    );
  }
}