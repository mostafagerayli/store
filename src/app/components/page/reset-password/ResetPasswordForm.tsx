"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

import Button from "../button/Button";
import InputField from "../input/InputField";
import useResetPassword from "@/app/hooks/auth/useResetPassword";

interface ResetPasswordFormDto {
  newPassword: string;
  confirmPassword: string;
}
export default function ResetPasswordForm() {
  const { handleResetPassword } = useResetPassword();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormDto>();

  const newPassword = watch("newPassword");

  const onSubmit = async (
    data: ResetPasswordFormDto
  ): Promise<void> => {
    await handleResetPassword(data.newPassword);
  };

  return (
    <div className="flex flex-col justify-center px-6 py-10 sm:px-10">
      <h1 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        Reset Password
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <InputField<ResetPasswordFormDto>
          name="newPassword"
          type="password"
          placeholder="New Password"
          register={register}
          rules={{
            required: "New password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          }}
          error={errors.newPassword?.message}
        />

        <InputField<ResetPasswordFormDto>
          name="confirmPassword"
          type="password"
          placeholder="Confirm New Password"
          register={register}
          rules={{
            required: "Please confirm your password",
            validate: (value) =>
              value === newPassword ||
              "Passwords do not match",
          }}
          error={errors.confirmPassword?.message}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Resetting..."
            : "Reset Password"}
        </Button>
      </form>

      <div className="mt-8 flex flex-col gap-3 text-center text-sm text-gray-600 sm:flex-row sm:justify-between">
        <Link
          href="/login"
          className="hover:text-green-600"
        >
          Back to Login
        </Link>

        <Link
          href="/register"
          className="hover:text-green-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
}