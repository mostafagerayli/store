import { Suspense } from "react";
import ProductsHero from "./ProductsHero";
import ProductsToolbar from "./ProductsToolbar";
import ProductsContent from "./ProductsContent";
import ProductsSkeleton from "./ProductsSkeleton";

type ProductsProps = {
  searchParams?: {
    page?: string;
    sort?: string;
    category?: string;
    search?: string;
  };
};

export default function Products({
  searchParams,
}: ProductsProps) {
  return (
    <main className="min-h-screen bg-[#f7f5ef]">
      <ProductsHero />
      <ProductsToolbar />

      <Suspense fallback={<ProductsSkeleton />}>
        <ProductsContent searchParams={searchParams} />
      </Suspense>
    </main>
  );
}