import { pool } from "@/app/lib/db";

export async function GET(req, { params }) {
  try {
    const { slug } = await params;

    const result = await pool.query(
      "SELECT * FROM products WHERE slug = $1",
      [slug]
    );

    if (result.rows.length === 0) {
      return Response.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

  
    return Response.json(result.rows[0]);
  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}