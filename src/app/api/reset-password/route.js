import { prisma } from "@/app/lib/prisma";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { token, newPassword } = await req.json();

    // تایید توکن
    const decoded = jwt.verify(token, process.env.RESET_PASSWORD_SECRET);

    // هش کردن رمز جدید
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // آپدیت رمز در DB
    await prisma.users.update({
      where: {
        id: decoded.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "Password updated successfully!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to reset password" },
      { status: 500 },
    );
  }
}
