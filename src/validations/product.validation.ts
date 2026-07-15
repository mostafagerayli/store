import { z } from "zod";

export const CreateProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "نام محصول حداقل ۳ کاراکتر باشد")
    .max(100),

  description: z
    .string()
    .trim()
    .optional(),

  price_per_kg: z.coerce
    .number()
    .positive("قیمت هر کیلو باید بزرگتر از صفر باشد"),

  stock: z.coerce
    .number()
    .int()
    .min(0, "موجودی نمی‌تواند منفی باشد"),
});


export const UpdateProductSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "نام محصول حداقل ۳ کاراکتر باشد")
    .max(100)
    .optional(),

  description: z
    .string()
    .trim()
    .optional(),

  price_per_kg: z.coerce
    .number()
    .positive("قیمت هر کیلو باید بزرگتر از صفر باشد")
    .optional(),

  stock: z.coerce
    .number()
    .int()
    .min(0, "موجودی نمی‌تواند منفی باشد")
    .optional(),
});