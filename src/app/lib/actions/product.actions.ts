"use server";

import { prisma } from "@/app/lib/prisma";
import { revalidateTag } from "next/cache";
import { supabaseAdmin } from "../supabaseAdmin";

export async function uploadImage(file: File) {
  const fileName = `${Date.now()}-${file.name}`;

  // 🔥 تبدیل File به Buffer (خیلی مهم)
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  const { error } = await supabaseAdmin.storage
    .from("products")
    .upload(fileName, buffer, {
      contentType: file.type,
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  const { data } = supabaseAdmin.storage
    .from("products")
    .getPublicUrl(fileName);

  return data.publicUrl;
}

export async function createProduct(formData: FormData) {
  const name = getString(formData, "name");
  const description = getString(formData, "description");
  const price = getNumber(formData, "price");
  const weight = getNumber(formData, "weight");
  const stock = getNumber(formData, "stock");
  const image = formData.get("image");

  let imagePath: string | null = null;

  if (image instanceof File && image.size > 0) {
    imagePath = await uploadImage(image);
  }

  // 🔥 ساخت slug
  const slug = `${name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")}-${Date.now()}`;

  const product = await prisma.products.create({
    data: {
      name,
      weight: weight ? Number(weight) : null,
      price: price ? Number(price) : null,
      stock: stock ? Number(stock) : 0,
      description,
      image_url: imagePath,
      slug, // ✅ مهم
    },
  });

  revalidateTag("products", "max");
  return product;
}

import type { Prisma } from "@prisma/client";
import { Product } from "@/types/product";
import { getString } from "@/app/utils/getString";
import { getNumber } from "@/app/utils/getNumber";

export async function editProduct(
  id: number | string,
  formData: FormData
) {
  try {
    if (!id) {
      return {
        success: false,
        message: "Product id is required",
      };
    }

    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const stock = formData.get("stock");
    const file = formData.get("image_url");

    let image_url: string | undefined;

    if (file instanceof File && file.size > 0) {
      image_url = await uploadImage(file);
    }

    const data: Prisma.productsUpdateInput = {};

    if (typeof name === "string") {
      data.name = name.trim();
    }

    if (typeof description === "string") {
      data.description = description.trim();
    }

    if (price !== null && price !== "") {
      data.price = Number(price);
    }

    if (stock !== null && stock !== "") {
      data.stock = Number(stock);
    }

    if (image_url) {
      data.image_url = image_url;
    }

    const updated = await prisma.products.update({
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
    console.error("UPDATE PRODUCT ERROR:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "خطا در بروزرسانی محصول",
    };
  }
}

export async function deleteProduct(
  id: number
): Promise<{
  success: boolean;
  data?: Product;
  message?: string;
}> {
  try {
    if (!id) {
      throw new Error("Product id is required");
    }

    const deleted = await prisma.products.delete({
      where: {
        id,
      },
    });

    revalidateTag("products", "max");

    return {
      success: true,
      data: deleted,
    };
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);

    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "خطا در حذف محصول",
    };
  }
}
