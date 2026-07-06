import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import { logoutUser } from "@/app/services/auth.service";

export function useLogout() {
  const router = useRouter();
  const { setUser } = useAuth();

  const logout = async () => {
    await logoutUser();

    setUser(null);

    router.push("/login");
  };

  return logout;
}