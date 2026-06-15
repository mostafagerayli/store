import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const stock = formData.get("stock");
    const weight = formData.get("weight");
    const file = formData.get("image");

    if (!name || !price) {
      return NextResponse.json(
        {
          success: false,
          message: "نام و قیمت الزامی است",
        },
        { status: 400 }
      );
    }

    let imagePath = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;

      const filePath = path.join(
        process.cwd(),
        "public",
        fileName
      );

      await writeFile(filePath, buffer);

      imagePath = `/${fileName}`;
    }

    const values = [
      name,
      description,
      Number(price),
      Number(stock || 0),
      Number(weight || 0),
      imagePath,
    ];

    const result = await pool.query(
      `
      INSERT INTO products
      (name, description, price, stock, weight, image_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
      `,
      values
    );

    const product = result.rows[0];

    // ساخت slug از روی id
    const slug = `pestechi-${product.id}`;

    await pool.query(
      `
      UPDATE products
      SET slug = $1
      WHERE id = $2
      `,
      [slug, product.id]
    );

    product.slug = slug;

    return NextResponse.json({
      success: true,
      product,
    });

  } catch (err) {
    console.error("🔥 FULL ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error: err?.message,
        stack: err?.stack,
      },
      { status: 500 }
    );
  }
}