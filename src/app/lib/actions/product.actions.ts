"use server";
import { Prisma } from "@prisma/client";
import { revalidateTag } from "next/cache";
import { supabaseAdmin } from "../supabaseAdmin";
import { Product } from "@/types/product";
import {
  CreateProductSchema,
  UpdateProductSchema,
} from "@/validations/product.validation";
import { prisma } from "../prisma";

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
  // دریافت مقادیر از FormData
  const body = {
    name: formData.get("name"),
    description: formData.get("description"),
    price: formData.get("price"),
    weight: formData.get("weight"),
    stock: formData.get("stock"),
  };

  // اعتبارسنجی
  const result = CreateProductSchema.safeParse(body);

  if (!result.success) {
    throw new Error(result.error.issues[0].message);
  }

  const { name, description, price, weight, stock } = result.data;

  // فایل
  const image = formData.get("image");

  let imagePath: string | null = null;

  if (image instanceof File && image.size > 0) {
    imagePath = await uploadImage(image);
  }

  // ساخت Slug
  const slug = `${name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")}-${Date.now()}`;

  // ذخیره در دیتابیس
  const product = await prisma.products.create({
    data: {
      name,
      description,
      price,
      weight: weight ?? 0,
      stock,
      image_url: imagePath,
      slug,
    },
  });

  revalidateTag("products", "max");

  return product;
}

export async function editProduct(id: number | string, formData: FormData) {

  try {
    if (!id) {
      return {
        success: false,
        message: "شناسه محصول الزامی است",
      };
    }

    const body = {
      name: formData.get("name") || undefined,
      description: formData.get("description") || undefined,
      price: formData.get("price") || undefined,
      stock: formData.get("stock") || undefined,
    };

    const result = UpdateProductSchema.safeParse(body);

    if (!result.success) {
      return {
        success: false,
        errors: result.error.flatten().fieldErrors,
      };
    }

    const { name, description, price, stock } = result.data;

    const data: Prisma.productsUpdateInput = {};

    if (name !== undefined) {
      data.name = name;
    }

    if (description !== undefined) {
      data.description = description;
    }

    if (price !== undefined) {
      data.price = price;
    }

    if (stock !== undefined) {
      data.stock = stock;
    }

    const image = formData.get("image_url");

    if (image instanceof File && image.size > 0) {
      data.image_url = await uploadImage(image);
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
        error instanceof Error ? error.message : "خطا در بروزرسانی محصول",
    };
  }
}

export async function deleteProduct(id: number): Promise<{
  success: boolean;
  data?: Product;
  message?: string;
}> {
  try {
    if (!Number.isInteger(id) || id <= 0) {
      throw new Error("Invalid product id");
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
      message: error instanceof Error ? error.message : "خطا در حذف محصول",
    };
  }
}
