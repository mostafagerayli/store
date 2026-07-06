"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import Button from "../../button/Button";
import InputField from "../../input/InputField";
import useRegister from "@/app/hooks/useRegister";
import { RegisterDto } from "@/types/auth";


export default function FormRegister() {
  const router = useRouter();
  const { registerForm } = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterDto>();

  const onSubmit = async (
    data: RegisterDto
  ): Promise<void> => {
    try {
      await registerForm(data);

      toast.success("ثبت نام با موفقیت انجام شد");

      router.replace("/login");
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
      <h1 className="mb-8 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        ایجاد حساب کاربری
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <InputField<RegisterDto>
          name="name"
          type="text"
          placeholder="نام و نام خانوادگی"
          register={register}
          rules={{
            required: "نام و نام خانوادگی الزامی است",
          }}
          error={errors.name?.message}
        />

        <InputField<RegisterDto>
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

        <InputField<RegisterDto>
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
          {isSubmitting
            ? "...درحال ثبت نام"
            : "ثبت نام"}
        </Button>
      </form>

      <p className="mt-8 text-center text-sm text-gray-600">
        قبلاً ثبت‌نام کرده‌اید؟{" "}
        <Link
          href="/login"
          className="text-green-600 hover:underline"
        >
          وارد شوید
        </Link>
      </p>
    </div>
  );
}