import { getProducts } from "@/app/lib/getProducts";
import ProductsHero from "./ProductsHero";
import ProductsToolbar from "./ProductsToolbar";
import ProductsSidebar from "./ProductsSidebar";
import ProductsHeader from "./ProductsHeader";
import ProductsGrid from "./ProductsGrid";
import Pagination from "../../pagination/Pagination";
import GiftPage from "./GiftPage";

export default async function Products({ searchParams }) {
  const params =await searchParams;

  const limit = 6;
  const page = Number(params?.page) || 1;
  const sort = params?.sort || "newest";
  const search = params?.search || "";

  const { products, total, error } = await getProducts(
    page,
    limit,
    sort,
    search
  );
  
  const totalPages = Math.ceil(total / limit);

  if (error) {
    return (
      <div className="p-6 bg-red-100 text-red-700 rounded-xl">
        ❌ خطا در دریافت محصولات از سرور
      </div>
    );
  }

  return (
    <main className="bg-[#f7f5ef] min-h-screen">
      <ProductsHero />

      <ProductsToolbar />

      <section className="max-w-6xl mx-auto px-4 mt-8 md:mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

          <ProductsSidebar />

          <div className="lg:col-span-9 order-2">
            <ProductsHeader />

            <ProductsGrid products={products} />

            <div className="mt-8">
              <Pagination
                page={page}
                totalPages={totalPages}
                basePath="/products"
                searchParams={params}
              />
            </div>
          </div>
        </div>
        <GiftPage/>
      </section>
    </main>
  );
}