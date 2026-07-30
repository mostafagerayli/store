"use client";

import Modal from "@/app/components/modal/Modal";
import Image from "next/image";
import { useState } from "react";

import AddBlog from "./AddBlog";
import EditBlogForm from "./EditBlogForm";
import DeleteConfirmModal from "@/app/components/modal/DeleteConfirmModal";
import useDeleteBlog from "@/app/hooks/blog/useDeleteBlog";
import { Blog } from "@/types/blog";

interface BlogTableProps {
  blogs: Blog[];
}

export default function BlogTable({ blogs }: BlogTableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  const { remove, loading } = useDeleteBlog(() => {
    setIsDeleteOpen(false);
    setSelectedBlog(null);
  });

const handleDelete = () => {
  if (!selectedBlog) return;

  remove(Number(selectedBlog.id));
};

  const closeEdit = () => {
    setIsEditOpen(false);
    setSelectedBlog(null);
  };

  const closeDelete = () => {
    setIsDeleteOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div dir="rtl" className="space-y-6">
      {/* Header */}
      <div
        className="
          flex 
          flex-col 
          gap-4
          rounded-2xl
          bg-white
          p-5
          shadow-sm
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        <div>
          <h1 className="text-xl font-black text-gray-800 sm:text-2xl">
            مدیریت پست‌ها
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            مشاهده، ویرایش و مدیریت مقالات وبلاگ
          </p>
        </div>

        <button
          onClick={() => setIsOpen(true)}
          className="
            flex
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-black
            px-5
            py-3
            text-sm
            font-bold
            text-white
            transition
            hover:opacity-80
            sm:w-auto
          "
        >
          <span className="text-xl">+</span>
          افزودن پست جدید
        </button>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-[850px] w-full text-right">
            <thead className="border-b bg-gray-50">
              <tr className="text-sm text-gray-700">
                <th className="px-5 py-4">تصویر</th>

                <th className="px-5 py-4">عنوان</th>

                <th className="px-5 py-4">دسته بندی</th>

                <th className="px-5 py-4">تاریخ انتشار</th>

                <th className="px-5 py-4">عملیات</th>
              </tr>
            </thead>

            <tbody>
              {blogs.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="py-10 text-center text-sm text-gray-500"
                  >
                    هیچ پستی وجود ندارد
                  </td>
                </tr>
              ) : (
                blogs.map((blog) => (
                  <tr
                    key={blog.id}
                    className="
                      border-b
                      transition
                      hover:bg-gray-50
                    "
                  >
                    {/* Image */}
                    <td className="px-5 py-4">
                      <div
                        className="
                          relative
                          h-12
                          w-12
                          overflow-hidden
                          rounded-xl
                          bg-gray-100
                        "
                      >
                        {blog.image ? (
                          <Image
                            src={blog.image}
                            alt={blog.title}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs text-gray-400">
                            -
                          </div>
                        )}
                      </div>
                    </td>

                    {/* Title */}
                    <td className="max-w-[220px] px-5 py-4">
                      <p className="truncate font-semibold text-gray-800">
                        {blog.title}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                        {blog.category}
                      </span>
                    </td>


                    {/* Date */}
                    <td className="px-5 py-4 text-sm text-gray-500">
                      {new Date(blog.created_at).toLocaleDateString("fa-IR")}
                    </td>

                    {/* Actions */}
                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setSelectedBlog(blog);
                            setIsEditOpen(true);
                          }}
                          className="
                            rounded-lg
                            bg-blue-500
                            px-3
                            py-2
                            text-xs
                            font-bold
                            text-white
                            transition
                            hover:bg-blue-600
                          "
                        >
                          ویرایش
                        </button>

                        <button
                          onClick={() => {
                            setSelectedBlog(blog);
                            setIsDeleteOpen(true);
                          }}
                          className="
                            rounded-lg
                            bg-red-500
                            px-3
                            py-2
                            text-xs
                            font-bold
                            text-white
                            transition
                            hover:bg-red-600
                          "
                        >
                          حذف
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="lg">
        <AddBlog onClose={() => setIsOpen(false)} />
      </Modal>

      {/* Edit */}
      <Modal isOpen={isEditOpen} onClose={closeEdit} size="lg">
        {selectedBlog && (
          <EditBlogForm blog={selectedBlog} onClose={closeEdit} />
        )}
      </Modal>

      {/* Delete */}
      <Modal isOpen={isDeleteOpen} onClose={closeDelete} size="sm">
        <DeleteConfirmModal
          title="پست"
          itemName={selectedBlog?.title}
          loading={loading}
          onClose={closeDelete}
          onConfirm={handleDelete}
        />
      </Modal>
    </div>
  );
}
