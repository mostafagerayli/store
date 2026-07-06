import { registerUser } from "@/app/services/auth.service";
import { RegisterDto } from "@/types/auth";
import { useRouter } from "next/navigation";

export default function useRegister() {
  const router = useRouter();

  const registerForm = async (formData: RegisterDto) => {
    const result = await registerUser(formData);

    router.push("/");

    return result;
  };

  return { registerForm };
}