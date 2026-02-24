import { useRouter, useSearchParams } from "next/navigation";

export function useResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // توکن از URL

  const ResetPassword = async (data) => {
    try {
      const body = {
        token,
        newPassword: data.newPassword,
      };

      const res = await fetch("/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Reset password failed");
        return;
      }

      alert("Password reset successfully. Please login.");
      router.push("/login");
    } catch (error) {
      console.error("Reset password error:", error);
      alert("Reset password failed");
    }
  };
  return ResetPassword;
}
