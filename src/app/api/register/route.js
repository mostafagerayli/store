import { prisma } from "@/app/lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { name, phone, password } = await req.json();
    if (!name || !phone || !password) {
      return new Response(JSON.stringify({ error: "All fields required" }), {
        status: 400,
      });
    }

    // چک شماره موبایل
    const existingUser = await prisma.users.findUnique({
      where: { phone },
    });
    if (existingUser) {
      return new Response(
        JSON.stringify({ error: "Phone already registered" }),
        { status: 400 },
      );
    }
    // Hash کردن پسورد
    const hashedPassword = await bcrypt.hash(password, 10);

    // ثبت کاربر
    const user = await prisma.users.create({
      data: {
        name,
        phone,
        password: hashedPassword,
      },
      select: {
        id: true,
        name: true,
        phone: true,
      },
    });
    // ساخت JWT
    const token = jwt.sign({ id: user.id }, "supersecretkey", {
      expiresIn: "1h",
    });

    return new Response(JSON.stringify({ user, token }), {
      status: 201,
    });
  } catch (err) {
    console.error("Register error:", err.message);
    return new Response(
      JSON.stringify({ error: "Database error", details: err.message }),
      { status: 500 },
    );
  }
}
