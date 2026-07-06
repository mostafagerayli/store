"use client";

import { useRouter } from "next/navigation";
import { forgotPassword } from "@/app/services/auth.service";
import type { ForgotPasswordDto } from "@/types/auth";
import { toast } from "react-toastify";

export default function useForgetPassword() {
  const router = useRouter();

  const forgetPassword = async (
    data: ForgotPasswordDto
  ): Promise<void> => {
    try {
      await forgotPassword(data);

      toast.success("A password reset link has been sent to your mobile number.");

      router.push("/login");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unknown error";

      console.error("Forgot password error:", message);

      toast.error(message);
    }
  };

  return { forgetPassword };
}