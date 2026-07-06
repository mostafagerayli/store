"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { resetPassword } from "@/app/services/auth.service";
import type { ResetPasswordDto } from "@/types/auth";
import { toast } from "react-toastify";

export default function useResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const token = searchParams.get("token");

  const handleResetPassword = async (
    newPassword: string
  ): Promise<void> => {
    try {
      if (!token) {
        throw new Error("Reset token is missing.");
      }

      const body: ResetPasswordDto = {
        token,
        newPassword,
      };

      await resetPassword(body);

      toast.success("Password reset successfully. Please login.");

      router.push("/login");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unknown error";

      console.error("Reset password error:", message);

      toast.error(message);
    }
  };

  return { handleResetPassword };
}