import { prisma } from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";
import { unstable_cache } from "next/cache";

const getCachedProducts = unstable_cache(
  async (
    page: number = 1,
    limit: number = 10,
    sort: string = "newest",
    search: string = ""
  ) => {
    const offset = (page - 1) * limit;

    let orderBy: Prisma.productsOrderByWithRelationInput;

    switch (sort) {
      case "price_asc":
        orderBy = { price_per_kg: "asc" };
        break;

      case "price_desc":
        orderBy = { price_per_kg: "desc" };
        break;

      default:
        orderBy = { created_at: "desc" };
    }

    const where: Prisma.productsWhereInput = search
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

    const [products, total] = await Promise.all([
      prisma.products.findMany({
        where,
        orderBy,
        take: limit,
        skip: offset,
      }),

      prisma.products.count({
        where,
      }),
    ]);

    return {
      products: products.map((p) => ({
        ...p,
        price_per_kg: Number(p.price_per_kg),
        stock_gram: Number(p.stock_gram),
      })),
      total,
    };
  },
  ["products"],
  {
    revalidate: 60,
    tags: ["products"],
  }
);


export async function getProducts(
  page: number = 1,
  limit: number = 10,
  sort: string = "newest",
  search: string = ""
) {
  try {
    const data = await getCachedProducts(
      page,
      limit,
      sort,
      search
    );

    return {
      ...data,
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