import { useRouter } from "next/navigation";

export default function useRegister() {
  const router = useRouter();
  const registerForm = async (data) => {
    try {
      // ساخت body مطابق با API
      const body = {
        name: data.name, // دقت کن همین key ها با API یکی باشه
        phone: data.phone,
        password: data.password,
      };

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const result = await res.json();

      if (!res.ok) {
        console.error("Register error:", result);
        alert(result.error || "Registration failed");
        return;
      }

      console.log("Register success:", result);

      // بعد از موفقیت، به صفحه اصلی برو
      router.push("/");
    } catch (err) {
      console.error("Fetch error:", err);
    }
  };
  return { registerForm };
}
