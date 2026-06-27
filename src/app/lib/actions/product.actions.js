"use server";

import { writeFile } from "fs/promises";
import path from "path";
import { prisma } from "@/app/lib/prisma";
import { revalidateTag } from "next/cache";

export async function createProduct(formData) {
  const name = formData.get("name");
  const weight = formData.get("weight");
  const price = formData.get("price");
  const stock = formData.get("stock");
  const description = formData.get("description");
  const image = formData.get("image");

  let imagePath = null;

  if (image instanceof File && image.size > 0) {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${image.name}`;

    const filePath = path.join(process.cwd(), "public/upload", fileName);

    await writeFile(filePath, buffer);

    imagePath = `/upload/${fileName}`;
  }

  // 1. create product
  const product = await prisma.products.create({
    data: {
      name,
      weight: weight ? Number(weight) : null,
      price: price ? Number(price) : null,
      stock: stock ? Number(stock) : 0,
      description,
      image_url: imagePath,
    },
  });

  // 2. slug
  const slug = `pestechi-${product.id}`;

  await prisma.products.update({
    where: { id: product.id },
    data: { slug },
  });

  revalidateTag("products");
  return product;
}

export async function editProduct(id, formData) {
  try {
    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const stock = formData.get("stock");
    const file = formData.get("image_url");

    const uploadDir = path.join(process.cwd(), "public/upload");

    let image_url;

    // اگر عکس جدید آپلود شد
    if (file instanceof File && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);

      await writeFile(filePath, buffer);

      image_url = `/upload/${fileName}`;
    }

    const updated = await prisma.products.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
        price: price ? Number(price) : undefined,
        stock: stock ? Number(stock) : undefined,
        ...(image_url && { image_url }),
      },
    });

    // 🔥 حل مشکل Decimal برای ارسال به Client
    const safeData = {
      ...updated,
      price: updated.price ? Number(updated.price) : null,
      weight: updated.weight ? Number(updated.weight) : null,
    };

    revalidateTag("products");

    return {
      success: true,
      data: safeData,
    };
  } catch (error) {
    console.error("UPDATE PRODUCT ERROR:", error);

    return {
      success: false,
      message: "خطا در بروزرسانی محصول",
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