import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

type RouteParams = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(
  req: Request,
  { params }: RouteParams
) {
  try {
    const { slug } = await params;

    const decodedSlug = decodeURIComponent(slug);

    const blog = await prisma.blogs.findUnique({
      where: {
        slug: decodedSlug,
      },
    });


    if (!blog) {
      return NextResponse.json(
        {
          message: "Blog not found",
        },
        {
          status: 404,
        }
      );
    }


    return NextResponse.json({
      ...blog,
      id: blog.id.toString(),
      created_at: blog.created_at.toISOString(),
      updated_at: blog.updated_at.toISOString(),
    });


  } catch (error) {

    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}