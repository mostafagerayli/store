import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { ReactNode } from "react";
import { AccessTokenPayload, AuthUser } from "@/types/auth";
import AuthProvider from "../context/AuthContext";

interface AuthBootstrapProps {
  children: ReactNode;
}

export default async function AuthBootstrap({
  children,
}: AuthBootstrapProps) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  let user: AuthUser | null = null;

  if (token) {
    try {
      const accessSecret = process.env.ACCESS_SECRET;

      if (!accessSecret) {
        throw new Error("ACCESS_SECRET is not configured");
      }

      const secret = new TextEncoder().encode(accessSecret);

      const { payload } = await jwtVerify(token, secret);

      const jwtPayload = payload as AccessTokenPayload;

      user = {
        id: jwtPayload.id,
        name: jwtPayload.name,
        role: jwtPayload.role,
      };
    } catch {
      user = null;
    }
  }

  return (
    <AuthProvider initialUser={user}>
      {children}
    </AuthProvider>
  );
}