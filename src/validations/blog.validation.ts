import { z } from "zod";

const BlogSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "عنوان حداقل باید 2 کاراکتر باشد")
    .max(150),

  description: z
    .string()
    .trim()
    .min(2, "توضیحات حداقل باید 2 کاراکتر باشد"),

  content: z
    .string()
    .trim()
    .min(10, "محتوا حداقل باید 10 کاراکتر باشد"),

  category: z
    .string()
    .trim()
    .min(2, "دسته‌بندی الزامی است"),
});

export const CreateBlogSchema = BlogSchema;

export const UpdateBlogSchema = BlogSchema.partial();