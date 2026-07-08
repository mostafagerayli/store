import { z } from "zod";

export const LoginSchema = z.object({
  phone: z
    .string()
    .trim()
    .min(11, "شماره موبایل باید 11 رقم باشد")
    .max(11, "شماره موبایل باید 11 رقم باشد")
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),

  password: z
    .string()
    .min(8, "رمز عبور حداقل 8 کاراکتر باشد"),
});

export type LoginInput = z.infer<typeof LoginSchema>;


export const RegisterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "نام باید حداقل ۳ کاراکتر باشد")
    .max(50, "نام نباید بیشتر از ۵۰ کاراکتر باشد"),

  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),

  password: z
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .max(100),
});

export const ResetPasswordSchema = z.object({
  token: z.string().min(1, "توکن الزامی است"),

  newPassword: z
    .string()
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")
    .max(100)
});

export const ForgotPasswordSchema = z.object({
  phone: z
    .string()
    .trim()
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
});