import Products from "@/app/components/page/products/Products";
import ClientLayout from "@/app/layout/ClientLayout";
import { SearchParams } from "@/types/common";

type ProductsPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  return (
    <ClientLayout>
      <Products searchParams={searchParams} />
    </ClientLayout>
  );
}