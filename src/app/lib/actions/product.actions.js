"use server";

import { prisma } from "@/app/lib/prisma";
import { revalidateTag } from "next/cache";
import { supabaseAdmin } from "../supabaseAdmin";

export async function uploadImage(file) {
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

export async function createProduct(formData) {
  const name = formData.get("name");
  const weight = formData.get("weight");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const description = formData.get("description");
  const image = formData.get("image");

  let imagePath = null;

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

  revalidateTag("products");
  return product;
}

export async function editProduct(id, formData) {
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

    let image_url;

    // 🔥 اگر عکس جدید آپلود شد → بفرست به Supabase
    if (file instanceof File && file.size > 0) {
      image_url = await uploadImage(file);
    }

    const updated = await prisma.products.update({
      where: {
        id: Number(id),
      },
      data: {
        ...(name && { name }),
        ...(description && { description }),
        ...(price !== null && price !== "" && {
          price: Number(price),
        }),
        ...(stock !== null && stock !== "" && {
          stock: Number(stock),
        }),
        ...(image_url && { image_url }),
      },
    });

    const safeData = {
      ...updated,
      id: updated.id.toString?.() || updated.id,
      price: updated.price ? Number(updated.price) : null,
      weight: updated.weight ? Number(updated.weight) : null,
    };

    return {
      success: true,
      data: safeData,
    };
  } catch (error) {
    console.error("UPDATE PRODUCT ERROR:", error);

    return {
      success: false,
      message: error.message || "خطا در بروزرسانی محصول",
    };
  }
}

export async function deleteProduct(id) {
  try {
    if (!id) throw new Error("Product id is required");

    const deleted = await prisma.products.delete({
      where: {
        id: Number(id),
      },
    });

    revalidateTag("products");

    return {
      success: true,
      data: deleted,
    };
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);

    return {
      success: false,
      message: error.message,
    };
  }
}