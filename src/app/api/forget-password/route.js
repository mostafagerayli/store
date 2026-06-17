import { prisma } from "@/app/lib/prisma";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { phone } = await req.json();
    const user = await prisma.users.findUnique({
      where: { phone },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // توکن یکبار مصرف برای reset password
    const resetToken = jwt.sign(
      { id: user.id },
      process.env.RESET_PASSWORD_SECRET,
      { expiresIn: "15m" }, // فقط 15 دقیقه اعتبار
    );

    // لینک برای بازیابی رمز
    const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

    // اینجا باید ایمیل یا SMS بفرستی، الان فقط console.log
    console.log("Reset link:", resetLink);

    return NextResponse.json({ message: "Reset link sent!" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
