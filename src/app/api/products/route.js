import { NextResponse } from "next/server";
import { pool } from "@/app/lib/db"; // همون Pool که تعریف کردی

export async function POST(req) {
  try {
    const { name, description, price, stock, weight, imageURL } =
      await req.json();

    // validate ساده
    if (!name || !price) {
      return NextResponse.json(
        { success: false, message: "نام و قیمت الزامی است" },
        { status: 400 }
      );
    }

    // INSERT INTO PostgreSQL
    const query = `
      INSERT INTO products (name, description, price, stock, weight, image_url)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;
    `;
    const values = [name, description, price, stock, weight, imageURL];

    const result = await pool.query(query, values);

    return NextResponse.json({
      success: true,
      product: result.rows[0],
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}