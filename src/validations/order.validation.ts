import { z } from "zod";


export const CreateOrderSchema = z.object({

  full_name: z
    .string()
    .trim()
    .min(3, "نام و نام خانوادگی الزامی است"),


  phone: z
    .string()
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),


  province: z
    .string()
    .min(2, "استان الزامی است"),


  city: z
    .string()
    .min(2, "شهر الزامی است"),


  address: z
    .string()
    .min(10, "آدرس کامل وارد کنید"),


  postal_code: z
    .string()
    .nullable()
    .optional(),


  description: z
    .string()
    .nullable()
    .optional(),


  products: z
    .array(
      z.object({
        id: z.number(),
        quantity: z.number(),
        selectedWeight: z.number(),
      })
    )
    .min(1, "سبد خرید خالی است"),

});