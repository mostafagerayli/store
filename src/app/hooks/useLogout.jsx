import { useRouter } from "next/navigation";
import { logoutUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";

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