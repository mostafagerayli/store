import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../services/auth.service";

export default function useLogin() {
  const router = useRouter();
  const { setUser } = useAuth();

  const login = async (values) => {
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