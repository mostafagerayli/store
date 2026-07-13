import { prisma } from "@/app/lib/prisma";
import { Prisma } from "@prisma/client";

export const revalidate = 60;

export async function getBlogs(
  page: number = 1,
  limit: number = 10,
  search: string = "",
  category: string = "all"
) {
  try {
    const offset = (page - 1) * limit;

    const where: Prisma.blogsWhereInput = {
      ...(search && {
        OR: [
          {
            title: {
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
          {
            content: {
              contains: search,
              mode: "insensitive",
            },
          },
        ],
      }),

      ...(category !== "all" && {
        category,
      }),
    };

    const [blogs, total] = await Promise.all([
      prisma.blogs.findMany({
        where,
        orderBy: {
          created_at: "desc",
        },
        take: limit,
        skip: offset,
      }),

      prisma.blogs.count({
        where,
      }),
    ]);

    return {
      blogs: blogs.map((blog) => ({
        ...blog,
        category: blog.category ?? "عمومی",
        created_at: blog.created_at.toISOString(),
        updated_at: blog.updated_at.toISOString(),
      })),
      total,
      error: null,
    };
  } catch (error) {
    console.error("Get Blogs Error:", error);

    return {
      blogs: [],
      total: 0,
      error: "خطا در دریافت پست‌ها",
    };
  }
}