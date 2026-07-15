import { getBlogs } from "@/app/lib/getBlogs";
import BlogTable from "./BlogTable";
import Pagination from "@/app/components/pagination/Pagination";

type SearchParams = {
  blogPage?: string;
};

type BlogsDashboardProps = {
  searchParams: SearchParams;
};

export default async function BlogsDashboard({
  searchParams,
}: BlogsDashboardProps) {

  const params = await searchParams;

  const limit = 3;

  // فقط صفحه‌بندی بلاگ
  const page = Number(params.blogPage ?? "1");


  const { blogs, total, error } = await getBlogs(
    page,
    limit
  );


  if (error) {
    return (
      <div className="
        rounded-2xl
        bg-red-50
        p-5
        text-center
        text-sm
        text-red-700
        shadow-sm
        md:p-6
      ">
        ❌ خطا در دریافت پست‌ها از سرور
      </div>
    );
  }


  const totalPages = Math.ceil(total / limit);


  return (
    <section className="mt-5 w-full">

      <div
        className="
          rounded-3xl
          border
          border-gray-100
          bg-white
          p-4
          shadow-lg
          sm:p-6
          lg:p-8
        "
      >

        {/* Table */}
        <div className="w-full overflow-x-auto rounded-2xl">

          <BlogTable blogs={blogs} />

        </div>



        {/* Pagination */}
        {totalPages > 1 && (

          <div className="mt-6 flex justify-center">

            <Pagination
              page={page}
              totalPages={totalPages}
              basePath="/dashboard"
              paramName="blogPage"
            />

          </div>

        )}

      </div>

    </section>
  );
}