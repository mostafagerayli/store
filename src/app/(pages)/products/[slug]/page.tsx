import { notFound } from "next/navigation";

import ProductDetail from "@/app/components/page/product-details/ProductDetail";
import Footer from "@/app/layout/Footer";
import Header from "@/app/layout/Header";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const res = await fetch(
    `https://pestepeste.vercel.app/api/v1/products/slug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    notFound();
  }

  const product = await res.json();

  return (
    <>
      <Header />
      <ProductDetail product={product} />
      <Footer />
    </>
  );
}