"use client";

import { useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Login Data:", data);
    await new Promise((resolve) => setTimeout(resolve,1000))
    router.push("/");
  };

  const inputClass =
    "w-full rounded-lg bg-[#051001] px-4 py-3 text-white text-sm " +
    "placeholder-gray-400 outline-none " +
    "focus:ring-2 focus:ring-green-500";

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020b02] px-4">
      <div className="w-full max-w-md rounded-xl bg-[#0b1d07] shadow-lg p-6 sm:p-8 md:p-10">
        <h1 className="mb-6 text-center text-2xl sm:text-3xl font-bold text-white">
          Login
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* Mobile */}
          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              inputMode="numeric"
              maxLength={11}
              {...register("mobile", {
                required: "Mobile number is required",
                pattern: {
                  value: /^09\d{9}$/,
                  message:
                    "Mobile number must start with 09 and be 11 digits",
                },
              })}
              onChange={(e) =>
                (e.target.value = e.target.value.replace(/\D/g, ""))
              }
              className={inputClass}
            />
            {errors.mobile && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                {errors.mobile.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              className={inputClass}
            />
            {errors.password && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Logging in..." : "Login"}
          </Button>
        </form>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between text-center text-sm text-gray-300">
          <Link
            href="/forgot-password"
            className="text-green-500 hover:underline"
          >
            Forgot Password?
          </Link>

          <Link
            href="/register"
            className="text-green-500 hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
