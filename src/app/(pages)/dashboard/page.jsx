import AddProduct from "@/app/components/page/dashboard/AddProducts";
import OrdersDashboard from "@/app/components/page/dashboard/OrderDashboard";
import ClientLayout from "@/app/layout/ClientLayout";


async function DashboardPage({ searchParams }) {
  const params = await searchParams;
  return (
    <ClientLayout>
      <AddProduct/>
      <OrdersDashboard searchParams={params} />
    </ClientLayout>
  );
}

export default DashboardPage;