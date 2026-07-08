import BlogCard from "./BlogCard";
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


  const limit = 5;

  const page = Number(
    params.page ?? "1"
  );


  const {
    blogs,
    error,
  } = await getBlogs(
    page,
    limit
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
      <div className="mt-10 text-center text-gray-500">
        هنوز مقاله‌ای منتشر نشده است
      </div>
    );
  }


  return (
    <section
      className="
        mt-14
        grid
        gap-8
        sm:grid-cols-2
        lg:grid-cols-3
      "
    >

      {blogs.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
        />
      ))}

    </section>
  );
}