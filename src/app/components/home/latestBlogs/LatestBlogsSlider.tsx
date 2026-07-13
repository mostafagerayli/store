"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Blog = {
  id: bigint;
  title: string;
  description: string;
  content: string;
  slug: string;
  image: string;
  category: string;
  created_at: string;
};

type Props = {
  blogs: Blog[];
};

export default function LatestBlogsSlider({ blogs }: Props) {
  return (
    <div className="relative">
      <button
        className="
blog-prev
absolute
left-0
top-1/2
z-20
flex
h-8
w-8
-translate-y-1/2
items-center
justify-center
rounded-full
bg-white
shadow-md
text-[#0A2D24]
"
      >
        ‹
      </button>

      <button
        className="
blog-next
absolute
right-0
top-1/2
z-20
flex
h-8
w-8
-translate-y-1/2
items-center
justify-center
rounded-full
bg-white
shadow-md
text-[#0A2D24]
"
      >
        ›
      </button>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".blog-prev",
          nextEl: ".blog-next",
        }}
        pagination={{
          clickable: true,
        }}
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 1.15,
          },

          480: {
            slidesPerView: 1.5,
          },

          640: {
            slidesPerView: 2,
          },

          768: {
            slidesPerView: 3,
          },

          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {blogs.map((blog) => (
          <SwiperSlide key={blog.id}>
            <Link href={`/blog/${blog.slug}`} className="block">
              <article
                className="
overflow-hidden
rounded-2xl
border
border-gray-200
bg-white
shadow-sm
transition
hover:-translate-y-1
hover:shadow-xl
"
              >
                <div
                  className="
relative
h-44
overflow-hidden
bg-gray-100
"
                >
                  <Image
                    src={blog.image ?? "/images/blog.jpg"}
                    alt={blog.title}
                    fill
                    className="
object-cover
transition
duration-500
hover:scale-105
"
                  />
                </div>

                <div className="p-4">
                  <span
                    className="
    text-xs
    font-bold
    text-green-700
    "
                  >
                    {blog.category}
                  </span>

                  <h3
                    className="
    mt-3
    line-clamp-2
    min-h-[48px]
    text-base
    font-black
    text-[#0A2D24]
    "
                  >
                    {blog.title}
                  </h3>

                  <p
                    className="
    mt-3
    text-xs
    text-gray-500
    "
                  >
                    {new Date(blog.created_at).toLocaleDateString("fa-IR")}
                  </p>

                  <div
                    className="
    mt-4
    
    
    py-2
    text-center
    text-sm
    text-[#3058fa]
    transition
    duration-300
    "
                  >
                    مشاهده مقاله
                  </div>
                </div>
              </article>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
