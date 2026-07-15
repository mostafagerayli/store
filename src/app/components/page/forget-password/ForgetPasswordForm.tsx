"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";

import Button from "../../button/Button";
import InputField from "../../input/InputField";

import type { ForgotPasswordDto } from "@/types/auth";
import useForgetPassword from "@/app/hooks/auth/useFogetPassword";

export default function ForgetPasswordForm() {
  const { forgetPassword } = useForgetPassword();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordDto>();

  const onSubmit = async (
    data: ForgotPasswordDto
  ): Promise<void> => {
    await forgetPassword(data);
  };

  return (
    <div className="flex flex-col justify-center px-6 py-10 sm:px-10">
      <h1 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        Forgot Password
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <InputField<ForgotPasswordDto>
          name="phone"
          placeholder="Mobile Number"
          inputMode="numeric"
          maxLength={11}
          register={register}
          rules={{
            required: "Mobile number is required",
            pattern: {
              value: /^09\d{9}$/,
              message: "Invalid mobile number",
            },
          }}
          error={errors.phone?.message}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Processing..."
            : "Send Reset Link"}
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