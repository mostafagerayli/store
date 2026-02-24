import { useRouter } from "next/navigation";

export function useFogetPassword() {
  const router = useRouter();
  const ForgetPassword = async (data) => {
    try {
      const body = {
        phone: data.phone,
      };

      const res = await fetch("/api/forget-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (!res.ok) {
        alert(result.error || "Request failed");
        return;
      }

      alert("A password reset link has been sent to your mobile number.");
      router.push("/login");
    } catch (error) {
      console.error("Forgot password error:", error);
      alert("Request failed");
    }
  };
  return ForgetPassword;
}
