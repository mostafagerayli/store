import { getProducts } from "@/app/lib/getProducts";
import ProductsTable from "./ProductsTable";
import Pagination from "../../pagination/Pagination";

export default async function OrdersDashboard({ searchParams }) {
  const limit = 5;
  const page = Number(searchParams?.page) || 1;
  const { products, total ,error} = await getProducts(page, limit);
  const totalPages = Math.ceil(total / limit);

  if (error) {
    return (
      <div className="p-6 bg-red-100 text-red-700 rounded-xl">
        ❌ خطا در دریافت محصولات از سرور
      </div>
    );
  }
  return (
    <>
      <ProductsTable products={products} />
      <Pagination page={page} totalPages={totalPages} basePath="/dashboard" />
    </>
  );
}
