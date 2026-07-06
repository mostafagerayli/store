import { useRouter } from "next/navigation";
import { loginUser } from "@/app/services/auth.service";
import { LoginDto } from "@/types/auth";
import { useAuth } from "@/app/context/AuthContext";

export default function useLogin() {
  const router = useRouter();
  const { setUser } = useAuth();

  const login = async (values: LoginDto) => {
    try {
      const result = await loginUser(values);

      setUser(result.user);

      router.push("/");

      return result;
    } catch (error) {
      throw error;
    }
  };

  return { login };
}
