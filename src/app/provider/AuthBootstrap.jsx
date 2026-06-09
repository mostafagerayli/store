import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import AuthProvider from "../context/AuthContext";

export default async function AuthBootstrap({ children }) {
  const cookieStore = await cookies(); // 👈 مهم

  const token = cookieStore.get("accessToken")?.value;

  let user = null;

  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.ACCESS_SECRET);
      const { payload } = await jwtVerify(token, secret);

      user = {
        id: payload.id,
        role: payload.role,
        name: payload.name,
      };
    } catch {}
  }

  return <AuthProvider initialUser={user}>{children}</AuthProvider>;
}
