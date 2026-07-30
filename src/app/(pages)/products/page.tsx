import Products from "@/app/components/page/products/Products";
import ClientLayout from "@/app/layout/ClientLayout";

import type { SearchParams } from "@/types/common";

type ProductsPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {

  const params = await searchParams;

  return (
    <ClientLayout>
      <Products searchParams={params} />
    </ClientLayout>
  );
}