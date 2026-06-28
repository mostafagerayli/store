"use client"
import Link from "next/link";
import { useFogetPassword } from "@/app/hooks/useFogetPassword";
import { useForm } from "react-hook-form";
import Button from "../../button/Button";
import InputField from "../../input/InputField";

function ForgetPasswordForm() {
  const ForgetPassword = useFogetPassword();
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = useForm();

  const onSubmit = async (data) => {
    await ForgetPassword(data);
  };

  return (
    <div className="flex flex-col justify-center px-6 sm:px-10 py-10">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        Forgot Password
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <InputField
          name="phone"
          placeholder="Mobile Number"
          inputMode="numeric"
          maxLength={11}
          register={register}
          error={errors.phone?.message}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Send Reset Link"}
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

export default ForgetPasswordForm;
