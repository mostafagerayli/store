// app/api/products/[id]/route.js
// app/api/products/[id]/route.js
import { writeFile } from "fs/promises";
import path from "path";
import { pool } from "@/app/lib/db";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id],
    );

    return Response.json({
      success: true,
      data: result.rows,
    });
  } catch (error) {
    return Response.json(
      {
        message: error.message,
      },
      { status: 500 },
    );
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } =await params;

    const formData = await req.formData();

    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const stock = formData.get("stock");
    const file = formData.get("image");

    let image_url = formData.get("image_url"); // fallback

    // اگر عکس جدید اومد
    if (file && typeof file !== "string") {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const fileName = `${Date.now()}-${file.name}`;

      await writeFile(path.join(process.cwd(), "public", fileName), buffer);

      image_url = `/${fileName}`;
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
      [name, description, price, stock, image_url, id],
    );

    return Response.json(result.rows[0]);
  } catch (error) {
    console.error("PUT ERROR:", error);

    return Response.json(
      { message: "خطا در بروزرسانی محصول" },
      { status: 500 },
    );
  }
}
