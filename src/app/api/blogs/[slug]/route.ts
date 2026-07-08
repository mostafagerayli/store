import { prisma } from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    const { slug } = await params;

    const post = await prisma.blogs.findUnique({
      where: {
        slug,
      },
    });

    if (!post) {
      return NextResponse.json(
        {
          message: "Post not found",
        },
        {
          status: 404,
        },
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";

    return NextResponse.json(
      {
        message,
      },
      {
        status: 500,
      },
    );
  }
}