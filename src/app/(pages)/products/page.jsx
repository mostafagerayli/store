import ClientLayout from "@/app/layout/ClientLayout";
import Products from "@/app/components/page/products/Products";

async function ProductsPage({ searchParams }) {
   
  return (
    <ClientLayout>
      <Products searchParams={searchParams}/>
    </ClientLayout>
  );
}

export default ProductsPage;
