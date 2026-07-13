"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";
import { toast } from "react-toastify";

import Button from "@/app/components/button/Button";
import InputField from "../../input/InputField";
import useLogin from "@/app/hooks/auth/useLogin";

import type { LoginDto } from "@/types/auth";

function LoginForm() {
  const { login } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginDto>();

  const onSubmit = async (data: LoginDto): Promise<void> => {
    try {
      await login(data);

      toast.success("لاگین با موفقیت انجام شد");
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "خطایی رخ داده است";

      toast.error(message);
    }
  };

  return (
    <div className="flex flex-col justify-center px-6 sm:px-10 py-10">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
       طلا سبز
      </h1>

      <h4 className="text-center text-lg font-serif text-gray-600 mb-2">
        خوش آمدید، لطفاً وارد شوید
      </h4>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <InputField
          name="phone"
          placeholder="شماره موبایل"
          inputMode="numeric"
          maxLength={11}
          register={register}
          rules={{
            required: "شماره موبایل الزامی است",
            pattern: {
              value: /^09\d{9}$/,
              message: "شماره موبایل معتبر نیست",
            },
          }}
          error={errors.phone?.message}
        />

        <InputField
          name="password"
          type="password"
          placeholder="رمز عبور"
          register={register}
          rules={{
            required: "رمز عبور الزامی است",
            minLength: {
              value: 6,
              message: "رمز عبور باید حداقل 6 کاراکتر باشد",
            },
          }}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "...درحال ورود" : "ورود"}
        </Button>
      </form>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-between text-center text-sm text-gray-600">
        <Link
          href="/forget-password"
          className="hover:text-gray-900"
        >
          فراموشی رمز
        </Link>

        <Link
          href="/register"
          className="hover:text-gray-900"
        >
          ثبت نام
        </Link>
      </div>
    </div>
  );
}

export default LoginForm;