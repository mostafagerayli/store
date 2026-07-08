"use server"
import { prisma } from "../prisma";
import { getString } from "@/app/utils/getString";
import { uploadImage } from "./product.actions";
import { BlogUpdateData } from "@/types/blog";
import { revalidateTag } from "next/cache";

export async function createBlog(formData: FormData) {
  const title = getString(formData, "title");
  const description = getString(formData, "description");
  const content = getString(formData, "content");
  const image = getString(formData, "image");

  // ساخت slug
  const slug = `${title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")}-${Date.now()}`;

  const blog = await prisma.blogs.create({
    data: {
      title,
      description,
      content,
      image,
      slug,
    },
  });

  revalidateTag("blogs", "max");

  return blog;
}

export async function editBlog(
  id: number | string,
  formData: FormData
) {
  try {
    if (!id) {
      return {
        success: false,
        message: "Blog id is required",
      };
    }

    const title = formData.get("title");
    const description = formData.get("description");
    const content = formData.get("content");
    const file = formData.get("image");

    let image: string | undefined;

    if (file instanceof File && file.size > 0) {
      image = await uploadImage(file);
    }

    const data: BlogUpdateData = {};

    if (typeof title === "string") {
      data.title = title.trim();
    }

    if (typeof description === "string") {
      data.description = description.trim();
    }

    if (typeof content === "string") {
      data.content = content.trim();
    }

    if (image) {
      data.image = image;
    }

    const updated = await prisma.blogs.update({
      where: {
        id: Number(id),
      },
      data,
    });

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

export async function deleteBlog(
  id: number
): Promise<{
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
      message:
        error instanceof Error
          ? error.message
          : "خطا در حذف بلاگ",
    };
  }
}