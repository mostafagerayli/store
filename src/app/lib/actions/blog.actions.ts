"use server";

import { prisma } from "../prisma";
import { revalidateTag } from "next/cache";
import { supabaseAdmin } from "../supabaseAdmin";
import { CreateBlogSchema, UpdateBlogSchema } from "@/validations/blog.validation";

export async function uploadBlogImage(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { error } = await supabaseAdmin.storage
    .from("blogs")
    .upload(fileName, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabaseAdmin.storage.from("blogs").getPublicUrl(fileName);

  return data.publicUrl;
}

export async function createBlog(formData: FormData) {
  const body = {
    title: formData.get("title"),
    description: formData.get("description"),
    content: formData.get("content"),
    category: formData.get("category"),
  };

  const result = CreateBlogSchema.safeParse(body);

  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { title, description, content, category } = result.data;

  const image = formData.get("image");
if (!(image instanceof File) || image.size === 0) {
  return {
    success: false,
    message: "تصویر مقاله الزامی است",
  };
}
  const imagePath = await uploadBlogImage(image)

  const slug = `${title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")}-${Date.now()}`;

  const blog = await prisma.blogs.create({
    data: {
      title,
      description,
      content,
      category,
      image: imagePath,
      slug,
    },
  });

  revalidateTag("blogs", "max");

  return {
    success: true,
    data: blog,
  };
}

export async function editBlog(id: number | string, formData: FormData) {
  try {
    if (!Number.isInteger(Number(id)) || Number(id) <= 0) {
      return {
        success: false,
        message: "شناسه بلاگ نامعتبر است",
      };
    }

    const body = {
      title: formData.get("title") || undefined,
      description: formData.get("description") || undefined,
      content: formData.get("content") || undefined,
      category: formData.get("category") || undefined,
    };

    const result = UpdateBlogSchema.safeParse(body);

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { title, description, content, category } = result.data;

    const data = {
      ...(title !== undefined && { title }),
      ...(description !== undefined && { description }),
      ...(content !== undefined && { content }),
      ...(category !== undefined && { category }),
        image: undefined as string | undefined,
    };

    const image = formData.get("image");

    if (image instanceof File && image.size > 0) {
      data.image = await uploadBlogImage(image);
    }

    const updated = await prisma.blogs.update({
      where: {
        id: Number(id),
      },
      data,
    });

    revalidateTag("blogs", "max");

    return {
      success: true,
      data: updated,
    };
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "خطا در بروزرسانی بلاگ",
    };
  }
}

export async function deleteBlog(id: number): Promise<{
  success: boolean;
  data?: unknown;
  message?: string;
}> {
  try {
    if (!id) {
      throw new Error("Blog id is required");
    }

    const deleted = await prisma.blogs.delete({
      where: {
        id: BigInt(id),
      },
    });

    revalidateTag("blogs", "max");

    return {
      success: true,

      data: deleted,
    };
  } catch (error) {
    console.error("DELETE BLOG ERROR:", error);

    return {
      success: false,

      message: error instanceof Error ? error.message : "خطا در حذف بلاگ",
    };
  }
}
