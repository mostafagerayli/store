import AddProduct from "@/app/components/page/dashboard/AddProducts";
import OrdersDashboard from "@/app/components/page/dashboard/OrderDashboard";
import ClientLayout from "@/app/layout/ClientLayout";


async function DashboardPage({ searchParams }) {
  const params = await searchParams;
  return (
    <ClientLayout>
      <div className="p-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          
          {/* فرم */}
          <div className="xl:col-span-4 ">
            <AddProduct />
          </div>

          {/* جدول */}
          <div className="xl:col-span-8">
            <OrdersDashboard searchParams={params} />
          </div>

        </div>
      </div>
    </ClientLayout>
  );
}

export default DashboardPage;