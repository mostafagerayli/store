import BlogCard from "./BlogCard";
import Pagination from "@/app/components/pagination/Pagination";
import { getBlogs } from "@/app/lib/getBlogs";

type SearchParams = {
  page?: string;
};

type BlogGridProps = {
  searchParams: Promise<SearchParams>;
};

export default async function BlogGrid({
  searchParams,
}: BlogGridProps) {
  const params = await searchParams;

  const limit = 6;
  const page = Number(params.page ?? "1");

const category = params.category ?? "all";

const { blogs, total, error } = await getBlogs(
  page,
  limit,
  "",
  category
);
  if (error) {
    return (
      <div className="mt-10 rounded-xl bg-red-100 p-5 text-red-600">
        خطا در دریافت مقالات
      </div>
    );
  }

  if (!blogs.length) {
    return (
      <div className="mt-10 text-center text-gray-500 ">
        هنوز مقاله‌ای منتشر نشده است
      </div>
    );
  }

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <section
        className="
          mt-14
          grid
          gap-8
          sm:grid-cols-2
          lg:grid-cols-3
          mb-8
        "
      >
        {blogs.map((post) => (
          <BlogCard
            key={post.id}
            post={post}
          />
        ))}
      </section>

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center mb-8">
          <Pagination
            page={page}
            totalPages={totalPages}
            basePath="/blog"
          />
        </div>
      )}
    </>
  );
}