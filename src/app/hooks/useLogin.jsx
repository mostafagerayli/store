import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function useLogin() {
  const router = useRouter();
const { setUser } = useAuth();
  const login = async ({ phone, password }) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ phone, password }),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Login failed");

        return null;
      }
      setUser(result.user);
      // موفقیت → ریدایرکت
      router.push("/");
      return result;
    } catch (err) {
      console.error("Login error:", err);
      return null;
    }
  };

  return { login };
}
