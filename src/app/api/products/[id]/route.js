// app/api/products/[id]/route.js
// app/api/products/[id]/route.js

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
    const { id } = await params;

    const body = await req.json();

    const { name, description, price, stock, image_url } = body;

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
    console.error(error);

    return Response.json(
      { message: "خطا در بروزرسانی محصول" },
      { status: 500 },
    );
  }
}
