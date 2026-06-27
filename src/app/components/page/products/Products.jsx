import { Suspense } from "react";
import ProductsHero from "./ProductsHero";
import ProductsToolbar from "./ProductsToolbar";
import ProductsContent from "./ProductsContent";
import ProductsSkeleton from "./ProductsSkeleton";

export default function Products({ searchParams }) {
  return (
    <main className="bg-[#f7f5ef] min-h-screen">
      <ProductsHero />
      <ProductsToolbar />

      <Suspense fallback={<ProductsSkeleton />}>
        <ProductsContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}