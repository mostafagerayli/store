import { z } from "zod";

export const CreateProductSchema = z.object({
  name: z.string().trim().min(3).max(100),

  description: z.string().trim().min(2),

  price: z.coerce.number().positive(),

  weight: z.coerce.number().positive().optional(),

  stock: z.coerce.number().int().min(0),
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
    .min(2, "توضیحات حداقل 2 کاراکتر باشد")
    .optional(),

  price: z.coerce
    .number()
    .positive("قیمت باید بزرگتر از صفر باشد")
    .optional(),

  stock: z.coerce
    .number()
    .int()
    .min(0, "موجودی نمی‌تواند منفی باشد")
    .optional(),
});