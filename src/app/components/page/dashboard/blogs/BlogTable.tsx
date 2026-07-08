"use client";

import Modal from "@/app/components/modal/Modal";
import Image from "next/image";
import { useState } from "react";
import AddBlog from "./AddBlog";


const blogs = [
  {
    id: 1,
    title: "آموزش کامل Next.js App Router",
    slug: "nextjs-app-router-guide",
    image: "/images/blog-1.jpg",
    created_at: "۱۴۰۵/۰۴/۱۶",
  },
  {
    id: 2,
    title: "بهترین روش‌های TypeScript در React",
    slug: "typescript-react-best-practices",
    image: "/images/blog-2.jpg",
    created_at: "۱۴۰۵/۰۴/۱۵",
  },
];

export default  function BlogTable() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      dir="rtl"
      className="space-y-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between rounded-2xl bg-white p-6 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            مدیریت پست‌ها
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            مشاهده، ویرایش و مدیریت مقالات وبلاگ
          </p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white transition hover:opacity-80"
        >
          <span className="text-xl">+</span>
          افزودن پست جدید
        </button>
      </div>


      {/* Table */}
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <table className="w-full text-right">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-6 py-4">تصویر</th>
              <th className="px-6 py-4">عنوان</th>
              <th className="px-6 py-4">آدرس</th>
              <th className="px-6 py-4">تاریخ انتشار</th>
              <th className="px-6 py-4">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((blog) => (
              <tr
                key={blog.id}
                className="border-b last:border-none hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-xl">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </td>

                <td className="px-6 py-4 font-medium">
                  {blog.title}
                </td>

                <td className="px-6 py-4 text-sm text-gray-500">
                  {blog.slug}
                </td>

                <td className="px-6 py-4 text-sm text-gray-500">
                  {blog.created_at}
                </td>

                <td className="px-6 py-4">
                  <div className="flex gap-3">
                    <button className="rounded-lg bg-blue-500 px-4 py-2 text-sm text-white">
                      ویرایش
                    </button>

                    <button className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white">
                      حذف
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Add Blog Modal */}
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  size="lg"
>
  <AddBlog
    onClose={() => setIsOpen(false)}
  />
</Modal>
    </div>
  );
}