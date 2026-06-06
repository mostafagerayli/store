import ClientLayout from "@/app/layout/ClientLayout";
import ProductList from "@/app/components/page/products/ProductList";
import Products from "@/app/components/page/products/Products";

function products() {
  return (
    <ClientLayout>
      <Products />
      <ProductList />
    </ClientLayout>
  );
}

export default products;
