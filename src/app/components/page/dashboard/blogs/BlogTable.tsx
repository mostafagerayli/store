"use client";

import Modal from "@/app/components/modal/Modal";
import Image from "next/image";
import { useState } from "react";

import AddBlog from "./AddBlog";
import EditBlogForm from "./EditBlogForm";
import DeleteConfirmModal from "@/app/components/modal/DeleteConfirmModal";
import useDeleteBlog from "@/app/hooks/blog/useDeleteBlog";
import { Blog } from "@/types/blog";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

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

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden overflow-hidden rounded-2xl border bg-white shadow-sm md:block">
        <table className="w-full table-fixed text-right">
          <thead className="border-b bg-gray-50">
            <tr className="text-sm text-gray-700">
              <th className="w-[12%] px-3 py-4">تصویر</th>

              <th className="w-[28%] px-3 py-4">عنوان</th>

              <th className="w-[20%] px-3 py-4">دسته بندی</th>

              <th className="w-[20%] px-3 py-4">تاریخ انتشار</th>

              <th className="w-[20%] px-3 py-4">عملیات</th>
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
                    last:border-b-0
                  "
                >
                  {/* Image */}
                  <td className="px-3 py-3">
                    <div
                      className="
                        relative
                        h-11
                        w-11
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
                  <td className="px-3 py-3">
                    <p className="truncate text-sm font-semibold text-gray-800">
                      {blog.title}
                    </p>
                  </td>

                  {/* Category */}
                  <td className="px-3 py-3">
                    <span className="inline-block max-w-full truncate rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                      {blog.category}
                    </span>
                  </td>

                  {/* Date */}
                  <td className="px-3 py-3 text-xs text-gray-500">
                    {new Date(blog.created_at).toLocaleDateString("fa-IR")}
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-3">
                    <div className="flex gap-1.5">
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
                        <FaEdit />
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
                        <MdDelete />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS ================= */}
      <div className="space-y-4 md:hidden">
        {blogs.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
            هیچ پستی وجود ندارد
          </div>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-4
                shadow-sm
              "
            >
              {/* Top */}
              <div className="flex items-center gap-3">
                {/* Image */}
                <div
                  className="
                    relative
                    h-16
                    w-16
                    shrink-0
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

                {/* Title */}
                <div className="min-w-0 flex-1">
                  <p className="truncate font-bold text-gray-800">
                    {blog.title}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">شناسه: {blog.id}</p>
                </div>
              </div>

              {/* Info */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                {/* Category */}
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="text-[11px] text-gray-400">دسته بندی</p>

                  <span className="mt-1 inline-block rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                    {blog.category}
                  </span>
                </div>

                {/* Date */}
                <div className="rounded-xl bg-gray-50 p-3">
                  <p className="text-[11px] text-gray-400">تاریخ انتشار</p>

                  <p className="mt-2 text-xs font-semibold text-gray-700">
                    {new Date(blog.created_at).toLocaleDateString("fa-IR")}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setSelectedBlog(blog);
                    setIsEditOpen(true);
                  }}
                  className="
                    flex-1
                    rounded-xl
                    bg-blue-500
                    py-2.5
                    text-xs
                    font-bold
                    text-white
                    transition
                    hover:bg-blue-600
                  "
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => {
                    setSelectedBlog(blog);
                    setIsDeleteOpen(true);
                  }}
                  className="
                    flex-1
                    rounded-xl
                    bg-red-500
                    py-2.5
                    text-xs
                    font-bold
                    text-white
                    transition
                    hover:bg-red-600
                  "
                >
                  <MdDelete />
                </button>
              </div>
            </div>
          ))
        )}
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
