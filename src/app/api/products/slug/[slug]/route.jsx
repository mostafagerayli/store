import { prisma } from "@/app/lib/prisma";

export async function GET(req, { params }) {
  try {
    const { slug } =await params;

    const product = await prisma.products.findUnique({
      where: {
        slug,
      },
    });

    if (!product) {
      return Response.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    return Response.json(product);

  } catch (error) {
    return Response.json(
      { message: error.message },
      { status: 500 }
    );
  }
}