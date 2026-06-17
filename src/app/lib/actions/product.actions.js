"use server";

import { writeFile } from "fs/promises";
import path from "path";
import { pool } from "@/app/lib/db";
import { revalidatePath } from "next/cache";
import fs from "fs";

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

    const filePath = path.join(
      process.cwd(),
      "public/upload",
      fileName
    );

    await writeFile(filePath, buffer);

    imagePath = `/upload/${fileName}`;
  }

  // محصول را ایجاد کن و id را بگیر
  const result = await pool.query(
    `
    INSERT INTO products
    (name, weight, price, stock, description, image_url)
    VALUES ($1,$2,$3,$4,$5,$6)
    RETURNING id
    `,
    [name, weight, price, stock, description, imagePath]
  );

  const productId = result.rows[0].id;

  // ساخت slug
  const slug = `pestechi-${productId}`;

  // ذخیره slug
  await pool.query(
    `
    UPDATE products
    SET slug = $1
    WHERE id = $2
    `,
    [slug, productId]
  );

  revalidatePath("/dashboard");
}


export async function editProduct(id, formData) {
  try {
    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const stock = formData.get("stock");
    const file = formData.get("image");

    let image_url = formData.get("image_url") || null;

    // 📁 ensure uploads folder exists
    const uploadDir = path.join(process.cwd(), "public/upload");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    // 🖼️ اگر عکس جدید اومد
    if (file instanceof File && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;
      const filePath = path.join(uploadDir, fileName);

      await writeFile(filePath, buffer);

      image_url = `/upload/${fileName}`;
    }

    const result = await pool.query(
      `
      UPDATE products
      SET
        name = $1,
        description = $2,
        price = $3,
        stock = $4,
        image_url = $5
      WHERE id = $6
      RETURNING *
      `,
      [name, description, price, stock, image_url, id]
    );

    revalidatePath("/dashboard");

    return {
      success: true,
      data: result.rows[0],
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
    if (!id) {
      throw new Error("Product id is required");
    }

    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id]
    );

    revalidatePath("/dashboard");

    return {
      success: true,
      data: result.rows[0],
    };
  } catch (error) {
    console.error("DELETE PRODUCT ERROR:", error);

    return {
      success: false,
      message: error.message,
    };
  }
}