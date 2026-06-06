import ClientLayout from "@/app/layout/ClientLayout";
import React from "react";
import OrdersDashboard from "@/app/components/page/dashboard/OrderDashboard";
import AddProducts from "@/app/components/page/dashboard/AddProducts";

async function DashboardPage({ searchParams }) {
  const params = await searchParams;
  return (
    <ClientLayout>
      <AddProducts />
      <OrdersDashboard searchParams={params} />
    </ClientLayout>
  );
}

export default DashboardPage;
