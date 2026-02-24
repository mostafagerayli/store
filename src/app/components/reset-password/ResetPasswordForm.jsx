"use client";
import Link from "next/link";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { useResetPassword } from "@/app/hooks/useResetPassword";

function ResetPasswordForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const ResetPassword = useResetPassword();

  const onSubmit = async (data) => {
    await ResetPassword(data);
  };

  const inputClass =
    "w-full rounded-lg bg-gray-100 px-4 py-3 text-sm text-gray-900 " +
    "placeholder-gray-500 outline-none " +
    "focus:ring-2 focus:ring-green-500";

  const newPassword = watch("newPassword");
  return (
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
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={inputClass}
          />
          {errors.newPassword && (
            <p className="mt-1 text-xs text-red-500">
              {errors.newPassword.message}
            </p>
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
            <p className="mt-1 text-xs text-red-500">
              {errors.confirmPassword.message}
            </p>
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
  );
}

export default ResetPasswordForm;
