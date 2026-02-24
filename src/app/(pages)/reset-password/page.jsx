"use client";
import { useForm } from "react-hook-form";
import Button from "@/app/components/button/Button";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // توکن از URL

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
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

  const inputClass =
    "w-full rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-900 " +
    "placeholder-gray-500 outline-none " +
    "focus:ring-2 focus:ring-green-500";

  const newPassword = watch("newPassword");

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 rounded-xl shadow-xl overflow-hidden bg-white min-h-[520px]">
        {/* Left Image */}
        <div className="hidden md:block relative">
          <Image
            src="/images/images2.jpg"
            alt="Terrarium"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-6 left-6 bg-white/80 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium">
            Bring nature into your home
          </div>
        </div>

        {/* Right Form */}
        <div className="flex flex-col justify-center px-6 sm:px-10 py-10">
          <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
            Reset Password
          </h1>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
            <div>
              <input
                type="password"
                placeholder="New Password"
                {...register("newPassword", {
                  required: "New password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" },
                })}
                className={inputClass}
              />
              {errors.newPassword && (
                <p className="mt-1 text-xs text-red-500">{errors.newPassword.message}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                placeholder="Confirm New Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === newPassword || "Passwords do not match",
                })}
                className={inputClass}
              />
              {errors.confirmPassword && (
                <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Resetting..." : "Reset Password"}
            </Button>
          </form>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between text-center text-sm text-gray-600">
            <Link href="/login" className="hover:text-green-600">
              Back to Login
            </Link>
            <Link href="/register" className="hover:text-green-600">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResetPasswordForm;