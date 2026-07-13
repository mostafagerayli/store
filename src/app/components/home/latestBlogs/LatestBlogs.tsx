import { getBlogs } from "@/app/lib/getBlogs";
import Link from "next/link";
import LatestBlogsSlider from "./LatestBlogsSlider";

export default async function LatestBlogs() {
  const { blogs } = await getBlogs(1, 10);

  return (
    <section className="py-14">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-8 flex items-center justify-between">
          <h2
            className="
            text-2xl
            font-black
            text-[#0A2D24]
            sm:text-3xl
            "
          >
            آخرین مقالات
          </h2>

          <Link
            href="/blog"
            className="
            rounded-full
            border
            border-[#0A2D24]
            px-4
            py-2
            text-sm
            font-bold
            text-[#0A2D24]
            transition
            hover:bg-[#0A2D24]
            hover:text-white
            "
          >
            مشاهده همه
          </Link>
        </div>

        <LatestBlogsSlider blogs={blogs} />
      </div>
    </section>
  );
}
