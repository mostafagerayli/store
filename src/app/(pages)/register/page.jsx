"use client";

import { useForm } from "react-hook-form";
import Button from "@/app/components/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const password = watch("password");
  const router = useRouter()

  const onSubmit = (data) => {
    console.log("Register Data:", data);
    router.push("/");
 };

  const inputClass =
    "w-full rounded-lg bg-[#051001] px-4 py-3 text-white text-sm " +
    "placeholder-gray-400 outline-none " +
    "focus:ring-2 focus:ring-green-500";

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#0b1d07] w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8 md:p-10">
        <h1 className="mb-6 text-center text-2xl sm:text-3xl font-bold text-white">
          Register
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", {
                required: "First name is required",
              })}
              className={inputClass}
            />
            {errors.firstName && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", {
                required: "Last name is required",
              })}
              className={inputClass}
            />
            {errors.lastName && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                {errors.lastName.message}
              </p>
            )}
          </div>

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

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className={inputClass}
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="text-green-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
