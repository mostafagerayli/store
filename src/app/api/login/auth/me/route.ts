import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { NextResponse } from "next/server";
import { AccessTokenPayload } from "@/types/auth";

export async function GET() {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const secret = new TextEncoder().encode(process.env.ACCESS_SECRET);

    const { payload } = await jwtVerify(token, secret);
    const user = payload as AccessTokenPayload;

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        role: user.role,
      },
    });
  } catch {
    return NextResponse.json({ user: null }, { status: 200 });
  }
}
