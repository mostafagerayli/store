import { getProducts } from "@/app/lib/getProducts";
import ProductsTable from "./ProductsTable";
import Pagination from "@/app/components/pagination/Pagination";

type SearchParams = {
  page?: string;
};

type ProductsDashboardProps = {
  searchParams: SearchParams;
};

export default async function ProductsDashboard({
  searchParams,
}: ProductsDashboardProps) {
  const params = await searchParams;

  const limit = 5;
  const page = Number(params.page ?? "1");

  const { products, total, error } = await getProducts(page, limit);

  if (error) {
    return (
      <div className="p-6 bg-red-100 text-red-700 rounded-xl">
        ❌ خطا در دریافت محصولات از سرور
      </div>
    );
  }

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
      <ProductsTable products={products} />

      <div className="mt-6">
        <Pagination
          page={page}
          totalPages={totalPages}
          basePath="/dashboard"
        />
      </div>
    </div>
  );
}