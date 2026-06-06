import { pool } from "./db";


export async function getProducts(page = 1, limit = 10) {
  const offset = (page - 1) * limit;

  const productsResult = await pool.query(
    `
      SELECT *
      FROM products
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
    `,
    [limit, offset]
  );

  const countResult = await pool.query(
    `
      SELECT COUNT(*) as total
      FROM products
    `
  );

  return {
    products: productsResult.rows,
    total: Number(countResult.rows[0].total),
  };
}