import ProductDetail from "@/app/components/page/product-details/ProductDetail";
import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";
import { prisma } from "@/app/lib/prisma";

export default async function Page({ params }) {
  const product = await prisma.products.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return (
    <>
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}