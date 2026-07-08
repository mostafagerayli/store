import { prisma } from "@/app/lib/prisma";
import { RegisterSchema } from "@/validations/auth.validation";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const result = RegisterSchema.safeParse(body);

    if (!result.success) {
      return Response.json(
        {
          success: false,
          errors: result.error.flatten(),
        },
        {
          status: 400,
        },
      );
    }

    const { name, phone, password } = result.data;

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

    return  NextResponse(JSON.stringify({ user, token }), {
      status: 201,
    });
  } catch (err) {
    console.error("Register error:", err.message);
    return NextResponse(
      JSON.stringify({ error: "Database error", details: err.message }),
      { status: 500 },
    );
  }
}
