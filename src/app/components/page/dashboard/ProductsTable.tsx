"use client";

import { useState } from "react";
import Image from "next/image";

import Modal from "../../modal/Modal";
import DeleteConfirmModal from "../../modal/DeleteConfirmModal";
import EditProductForm from "./EditProductForm";

import useDeleteProduct from "@/app/hooks/product/useDeleteProduct";
import { Product } from "@/types/product";

export default function ProductsTable({
  products = [],
}: {
  products: Product[];
}) {
const [selectedProduct, setSelectedProduct] =
  useState<Product | null>(null);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { remove, loading } = useDeleteProduct(() => {
    setDeleteOpen(false);
    setSelectedProduct(null);
  });

  const handleEdit = (product: Product ) => {
    setSelectedProduct(product);
    setEditOpen(true);
  };

  const handleDelete = (product: Product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };

  const confirmDelete = () => {
    if (!selectedProduct) return;
    remove(selectedProduct.id);
  };

  const closeDeleteModal = () => {
    setDeleteOpen(false);
    setSelectedProduct(null);
  };

  const closeEditModal = () => {
    setEditOpen(false);
    setSelectedProduct(null);
  };

  if (!products.length) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-lg text-center text-gray-500">
        محصولی برای نمایش وجود ندارد
      </div>
    );
  }

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
                <th className="p-4 text-center">شناسه</th>
                <th className="p-4 text-center">نام محصول</th>
                <th className="p-4 text-center">وزن</th>
                <th className="p-4 text-center">قیمت</th>
                <th className="p-4 text-center">موجودی</th>
                <th className="p-4 text-center">تصویر</th>
                <th className="p-4 text-center">توضیحات</th>
                <th className="p-4 text-center">عملیات</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-green-50 transition"
                >
                  <td className="p-4 text-center font-bold">
                    #{product.id}
                  </td>

                  <td className="p-4 text-center font-semibold">
                    {product.name}
                  </td>

                  <td className="p-4 text-center">
                    {Number(product.weight).toLocaleString()} گرم
                  </td>

                  <td className="p-4 text-center text-[#0b5b3c] font-semibold">
                    {Number(product.price).toLocaleString()} تومان
                  </td>

                  <td className="p-4 text-center">
                    {product.stock}
                  </td>

                  <td className="p-4 text-center">
                    <div className="relative w-16 h-16 mx-auto rounded-xl overflow-hidden bg-gray-100">
                      {product.image_url ? (
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full text-xs text-gray-400">
                          بدون عکس
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="p-4 text-center truncate max-w-[200px] text-gray-600">
                    {product.description}
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-2">

                      <button
                        onClick={() => handleEdit(product)}
                        className="px-3 py-1 rounded-lg bg-amber-400 text-white font-bold hover:bg-amber-500"
                      >
                        ویرایش
                      </button>

                      <button
                        onClick={() => handleDelete(product)}
                        className="px-3 py-1 rounded-lg bg-red-500 text-white font-bold hover:bg-red-600"
                      >
                        حذف
                      </button>

                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* Edit Modal */}
<Modal isOpen={editOpen} onClose={closeEditModal} size="lg">
  {selectedProduct && (
    <EditProductForm
      product={selectedProduct}
      onClose={closeEditModal}
    />
  )}
</Modal>

      {/* Delete Modal */}
      <Modal isOpen={deleteOpen} onClose={closeDeleteModal} size="sm">
        <DeleteConfirmModal
          product={selectedProduct}
          onConfirm={confirmDelete}
          onClose={closeDeleteModal}
          loading={loading}
        />
      </Modal>
    </>
  );
}