import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export function useLogout() {
  const router = useRouter();
  const { setUser } = useAuth();

  const logout = async () => {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      if (res.ok) {
        setUser(null); // 👈 مهم
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return logout;
}
