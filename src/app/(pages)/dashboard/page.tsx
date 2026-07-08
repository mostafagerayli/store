import AddProduct from "@/app/components/page/dashboard/AddProducts";
import BlogsDashboard from "@/app/components/page/dashboard/blogs/BlogsDashboard";
import ProductsDashboard from "@/app/components/page/dashboard/ProductsDashboard";
import ClientLayout from "@/app/layout/ClientLayout";

 type SearchParams = {
  page?: string;
  sort?: string;
  search?: string;
  [key: string]: string | string[] | undefined;
};

type DashboardPageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const params = await searchParams;

  return (
    <ClientLayout>
      <div className="p-6">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-4">
            <AddProduct />
          </div>

          <div className="xl:col-span-8">
            <ProductsDashboard searchParams={params} />
          </div>
        </div>
        <BlogsDashboard searchParams={params}/>
      </div>
    </ClientLayout>
  );
}