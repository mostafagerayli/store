import ClientLayout from "@/app/layout/ClientLayout";
import ProductList from "@/app/components/products/ProductList";
import Pagination from "@/app/components/products/Pagination";

function products() {
  return (
    <ClientLayout>
      <ProductList />
      <Pagination/>
    </ClientLayout>
  );
}

export default products;
