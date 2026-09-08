import BlogsDashboard from "@/app/components/page/dashboard/blogs/BlogsDashboard";
import ProductsDashboard from "@/app/components/page/dashboard/products/ProductsDashboard";
import ClientLayout from "@/app/layout/ClientLayout";

type SearchParams = {
  productPage?: string;
  blogPage?: string;
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
    <div className="p-4 md:p-6 bg-[#fdfdf9]">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* نصف اول */}
        <div className="min-w-0">
          <ProductsDashboard
            searchParams={{
              productPage: params.productPage,
            }}
          />
        </div>

        {/* نصف دوم */}
        <div className="min-w-0">
          <BlogsDashboard
            searchParams={{
              blogPage: params.blogPage,
            }}
          />
        </div>
      </div>
    </div>
  </ClientLayout>
);
}
