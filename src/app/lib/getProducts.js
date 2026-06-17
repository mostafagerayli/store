import { prisma } from "@/app/lib/prisma";

export async function getProducts(
  page = 1,
  limit = 10,
  sort = "newest",
  search = ""
) {
  try {
    const offset = (page - 1) * limit;

    // sorting
    let orderBy;

    switch (sort) {
      case "price_asc":
        orderBy = { price: "asc" };
        break;

      case "price_desc":
        orderBy = { price: "desc" };
        break;

      default:
        orderBy = { created_at: "desc" };
    }

    // search filter
    const where = search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }
      : {};

    // get products
    const products = await prisma.products.findMany({
      where,
      orderBy,
      take: Number(limit),
      skip: Number(offset),
    });

    // count total
    const total = await prisma.products.count({
      where,
    });

    return {
      products: products.map((p) => ({
        ...p,
        price: p.price ? Number(p.price) : null,
        weight: p.weight ? Number(p.weight) : null,
      })),
      total,
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