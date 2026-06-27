import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return NextResponse.json(
        { user: null },
        { status: 200 }
      );
    }

    const secret = new TextEncoder().encode(
      process.env.ACCESS_SECRET
    );

    const { payload } = await jwtVerify(token, secret);

    return NextResponse.json({
      user: {
        id: payload.id,
        name: payload.name,
        role: payload.role,
      },
    });
  } catch {
    return NextResponse.json(
      { user: null },
      { status: 200 }
    );
  }
}