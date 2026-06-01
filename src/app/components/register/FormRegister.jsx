"use client";
import Button from "../button/Button";
import Link from "next/link";
import InputField from "../input/InputField";
import { useForm } from "react-hook-form";
import useRegister from "@/app/hooks/useRegister";

function FormRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const { registerForm } = useRegister();

  const onSubmit = async (data) => {
    await registerForm(data);
  };
  return (
    <div className="flex flex-col justify-center px-6 sm:px-10 py-10">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        ایجاد حساب کاربری
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
        <InputField
          name="name"
          type="text"
          placeholder="نام و نام خانوادگی"
          register={register}
          error={errors.name?.message}
        />

        <InputField
          name="phone"
          placeholder="شماره موبایل"
          inputMode="numeric"
          maxLength={11}
          register={register}
          error={errors.phone?.message}
        />
        <InputField
          name="password"
          type="password"
          placeholder="رمز عبور"
          register={register}
          error={errors.password?.message}
        />

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "...درحال ثبت نام " : "ثبت نام"}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-600">
        قبلا ثبت نام کردهاید؟
        <Link href="/login" className="text-green-600 hover:underline">
          وارشوید
        </Link>
      </p>
    </div>
  );
}

export default FormRegister;
