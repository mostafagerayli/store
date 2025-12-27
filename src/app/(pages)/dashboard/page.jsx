import Chart from '@/app/components/dashboard/Chart'
import DashboardHeader from '@/app/components/dashboard/DashboardHeader'
import ClientLayout from '@/app/layout/ClientLayout'
import React from 'react'
import data from '../../data/db.json'
import OrdersTable from '@/app/components/dashboard/OrdersTable'
import TopProducts from '@/app/components/dashboard/TopProducts'


function DashboardPage() {
  return (
     <ClientLayout>
     <DashboardHeader/>
     <Chart/>
     <OrdersTable orders={data.orders}/>
     <TopProducts products={data.topProducts}/>
     </ClientLayout>
  )
}

export default DashboardPage