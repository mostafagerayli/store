import { useRouter } from "next/navigation";
import { registerUser } from "../services/auth.service";

export default function useRegister() {
  const router = useRouter();

  const registerForm = async (formData) => {
    const result = await registerUser(formData);

    router.push("/");

    return result;
  };

  return { registerForm };
}