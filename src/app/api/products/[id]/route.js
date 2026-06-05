// app/api/products/[id]/route.js
// app/api/products/[id]/route.js

import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    await pool.query(
      "DELETE FROM products WHERE id = $1",
      [id]
    );

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "خطا در حذف محصول" },
      { status: 500 }
    );
  }
}
export async function PUT(req, { params }) {
  try {
    const { id } = await params;

    const body = await req.json();

    const {
      name,
      description,
      price,
      stock,
      image_url,
    } = body;

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
      [
        name,
        description,
        price,
        stock,
        image_url,
        id,
      ]
    );

    return Response.json(result.rows[0]);
  } catch (error) {
    console.error(error);

    return Response.json(
      { message: "خطا در بروزرسانی محصول" },
      { status: 500 }
    );
  }
}