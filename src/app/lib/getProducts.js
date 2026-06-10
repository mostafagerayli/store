import { pool } from "./db";

export async function getProducts(
  page = 1,
  limit = 10,
  sort = "newest",
  search = ""
) {
  try {
    const offset = (page - 1) * limit;

    let orderBy = "created_at DESC";

    switch (sort) {
      case "price_asc":
        orderBy = "price ASC";
        break;

      case "price_desc":
        orderBy = "price DESC";
        break;

      default:
        orderBy = "created_at DESC";
    }

    const hasSearch = search.trim().length > 0;

    const productsQuery = `
      SELECT *
      FROM products
      ${
        hasSearch
          ? `WHERE name ILIKE $3
             OR description ILIKE $3`
          : ""
      }
      ORDER BY ${orderBy}
      LIMIT $1 OFFSET $2
    `;

    const productsValues = hasSearch
      ? [limit, offset, `%${search}%`]
      : [limit, offset];

    const productsResult = await pool.query(
      productsQuery,
      productsValues
    );

    const countQuery = hasSearch
      ? `
        SELECT COUNT(*) AS total
        FROM products
        WHERE name ILIKE $1
        OR description ILIKE $1
      `
      : `
        SELECT COUNT(*) AS total
        FROM products
      `;

    const countResult = hasSearch
      ? await pool.query(countQuery, [`%${search}%`])
      : await pool.query(countQuery);

    return {
      products: productsResult.rows,
      total: Number(countResult.rows[0].total),
      error: null,
    };
  } catch (error) {
    console.error("Get Products Error:", error);

    return {
      products: [],
      total: 0,
      error: "خطا در دریافت محصولات",
    };
  }
}