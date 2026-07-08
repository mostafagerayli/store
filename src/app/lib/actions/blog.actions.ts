"use server";

import { prisma } from "../prisma";
import { getString } from "@/app/utils/getString";
import { BlogUpdateData } from "@/types/blog";
import { revalidateTag } from "next/cache";
import { supabaseAdmin } from "../supabaseAdmin";

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
  const title = getString(formData, "title");
  const description = getString(formData, "description");
  const content = getString(formData, "content");
  const category = getString(formData, "category");

  const image = formData.get("image");

  let imagePath: string | null = null;

  if (image instanceof File && image.size > 0) {
    imagePath = await uploadBlogImage(image);
  }

  const slug = `${title
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")}-${Date.now()}`;

  const blog = await prisma.blogs.create({
    data: {
      title,

      description,

      content,

      category, // ✅ اضافه شد

      image: imagePath,

      slug,
    },
  });

  revalidateTag("blogs", "max");

  return blog;
}

export async function editBlog(id: number | string, formData: FormData) {
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

    const category = formData.get("category"); // ✅ اضافه شد

    const file = formData.get("image");

    let image: string | undefined;

    if (file instanceof File && file.size > 0) {
      image = await uploadBlogImage(file);
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

    if (typeof category === "string") {
      data.category = category.trim(); // ✅ اضافه شد
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

    revalidateTag("blogs", "max");

    return {
      success: true,

      data: updated,
    };
  } catch (error) {
    console.error("UPDATE BLOG ERROR:", error);

    return {
      success: false,

      message: error instanceof Error ? error.message : "خطا در بروزرسانی بلاگ",
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
