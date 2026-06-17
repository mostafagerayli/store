"use client";

import Image from "next/image";
import { useState } from "react";
import Modal from "../../modal/Modal";
import EditProductForm from "./EditProductForm";
import DeleteConfirmModal from "../../modal/DeleteConfirmModal";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { deleteProduct } from "@/app/lib/actions/product.actions";

export default function ProductsTable({ products }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [deleteOpen, setDeleteOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  if (!products) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
        در حال بارگذاری...
      </div>
    );
  }

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };

  const handleDelete = async () => {
    try {
      setIsDeleting(true);

      await deleteProduct(selectedProduct.id);

      toast.success("محصول با موفقیت حذف شد");
      setDeleteOpen(false);
      router.refresh();
    } catch (error) {
      toast.error(error?.message || "خطا در حذف محصول");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 py-5 bg-gradient-to-r from-[#336437] to-[#083f10] text-white">
          <div>
            <h2 className="text-2xl font-black">مدیریت محصولات</h2>
            <p className="text-sm text-white/80 mt-1">
               ویرایش و حذف محصولات فروشگاه
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-[1000px] w-full">
            <thead>
              <tr className="bg-gray-50 border-b text-gray-700">
                <th className="p-4 text-center font-extrabold">
                  شناسه
                </th>

                <th className="p-4 text-center font-extrabold">
                  نام محصول
                </th>

                <th className="p-4 text-center font-extrabold">
                  وزن
                </th>

                <th className="p-4 text-center font-extrabold">
                  قیمت
                </th>

                <th className="p-4 text-center font-extrabold">
                  موجودی
                </th>

                <th className="p-4 text-center font-extrabold">
                  تصویر
                </th>

                <th className="p-4 text-center font-extrabold">
                  توضیحات
                </th>

                <th className="p-4 text-center font-extrabold">
                  عملیات
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 hover:bg-green-50 transition-all duration-200"
                >
                  <td className="p-4 text-center">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-bold">
                      #{product.id}
                    </span>
                  </td>

                  <td className="p-4 text-center font-bold text-gray-800">
                    {product.name}
                  </td>

                  <td className="p-4 text-center text-gray-600">
                    {Number(product.weight).toLocaleString()} گرم
                  </td>

                  <td className="p-4 text-center font-semibold text-[#0b5b3c]">
                    {Number(product.price).toLocaleString()} تومان
                  </td>

                  <td className="p-4 text-center">
                    <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">
                      {Number(product.stock)}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <div className="w-20 h-20 mx-auto rounded-2xl overflow-hidden bg-gray-100 relative shadow">
                      {product.image_url ? (
                        <Image
                          src={product.image_url}
                          alt={product.name || "product"}
                          fill
                          className="object-cover hover:scale-110 transition duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                          بدون عکس
                        </div>
                      )}
                    </div>
                  </td>

                  <td
                    title={product.description}
                    className="p-4 text-center max-w-[250px] truncate text-gray-600"
                  >
                    {product.description}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
                          setOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-amber-400 text-white font-bold hover:bg-amber-600 transition"
                      >
                         ویرایش
                      </button>

                      <button
                        onClick={() => openDeleteModal(product)}
                        className="px-4 py-2 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600 transition"
                      >
                         حذف
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={8}
                    className="text-center py-12 text-gray-500"
                  >
                    محصولی برای نمایش وجود ندارد.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        size="lg"
      >
        <EditProductForm
          product={selectedProduct}
          onClose={() => setOpen(false)}
        />
      </Modal>

      {/* Delete Modal */}
      <Modal
        isOpen={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        title="حذف محصول"
        size="sm"
      >
        <DeleteConfirmModal
          product={selectedProduct}
          onConfirm={handleDelete}
          onClose={() => setDeleteOpen(false)}
          loading={isDeleting}
        />
      </Modal>
    </>
  );
}