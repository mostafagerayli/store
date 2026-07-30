import { getProducts } from "@/app/lib/getProducts";
import ProductsSidebar from "./ProductsSidebar";
import ProductsHeader from "./ProductsHeader";
import ProductsGrid from "./ProductsGrid";
import Pagination from "../../pagination/Pagination";
import GiftPage from "./GiftPage";

export interface SearchParams {
  page?: string;
  sort?: string;
  search?: string;
  category?: string;
}

type ProductsContentProps = {
  searchParams?: SearchParams;
};

export default async function ProductsContent({
  searchParams,
}: ProductsContentProps) {
    const params = await searchParams;
  const limit = 6;

 const page = Number(params?.page) || 1;
  const sort = params?.sort ?? "newest";
  const search = params?.search ?? "";

  const { products, total, error } = await getProducts(
    page,
    limit,
    sort,
    search
  );

  const totalPages = Math.ceil(total / limit);

  if (error) {
    return (
      <div className="rounded-xl bg-red-100 p-6 text-red-700">
        ❌ خطا در دریافت محصولات از سرور
      </div>
    );
  }
  const urlSearchParams = new URLSearchParams(
  searchParams as Record<string, string>
);

  return (
    <section className="mx-auto mt-8 max-w-6xl px-4 md:mt-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <ProductsSidebar />

        <div className="order-2 lg:col-span-9">
          <ProductsHeader />

          <ProductsGrid products={products} />

          <div className="mt-8">
            <Pagination
              page={page}
              totalPages={totalPages}
              basePath="/products"
              searchParams={urlSearchParams}
            />
          </div>
        </div>
      </div>

      <GiftPage />
    </section>
  );
}