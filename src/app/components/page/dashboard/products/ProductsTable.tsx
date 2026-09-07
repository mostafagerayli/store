"use client";

import Image from "next/image";
import { useState } from "react";

import Modal from "@/app/components/modal/Modal";
import AddProduct from "./AddProducts";
import { Product } from "@/types/product";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import DeleteConfirmModal from "@/app/components/modal/DeleteConfirmModal";
import EditProductForm from "./EditProductForm";
import useDeleteProduct from "@/app/hooks/product/useDeleteProduct";

interface ProductsTableProps {
  products: Product[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
const [isAddOpen, setIsAddOpen] = useState(false);
const [isEditOpen, setIsEditOpen] = useState(false);
const [isDeleteOpen, setIsDeleteOpen] = useState(false);

const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const { remove, loading } = useDeleteProduct(() => {
    setIsDeleteOpen(false);
    setSelectedProduct(null);
  });

  const handleDelete = () => {
    if (!selectedProduct) return;

    remove(Number(selectedProduct.id));
  };

const closeEdit = () => {
  setIsEditOpen(false);
  setSelectedProduct(null);
};


const closeDelete = () => {
  setIsDeleteOpen(false);
  setSelectedProduct(null);
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
            مدیریت محصولات
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            مشاهده، ویرایش و مدیریت محصولات فروشگاه
          </p>
        </div>

        <button
          onClick={() => setIsAddOpen(true)}
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
          افزودن محصول
        </button>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-hidden rounded-2xl border bg-white shadow-sm md:block">
        <table className="w-full table-fixed text-right">
          <thead className="border-b bg-gray-50">
            <tr className="text-sm text-gray-700">
              <th className="w-[24%] px-3 py-4 text-center">نام محصول</th>

              <th className="w-[22%] px-3 py-4 text-center">قیمت هر کیلو</th>

              <th className="w-[15%] px-3 py-4 text-center">موجودی</th>

              <th className="w-[13%] px-3 py-4 text-center">تصویر</th>

              <th className="w-[16%] px-3 py-4 text-center">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {products.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-10 text-center text-sm text-gray-500"
                >
                  هیچ محصولی وجود ندارد
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="
                    border-b
                    transition
                    hover:bg-gray-50
                  "
                >
                  {/* Name */}
                  <td className="px-3 py-3 text-center">
                    <p className="truncate text-sm font-semibold">
                      {product.name}
                    </p>
                  </td>

                  {/* Price */}
                  <td className="whitespace-nowrap px-3 py-3 text-center text-sm font-semibold text-[#0b5b3c]">
                    {Number(product.price_per_kg).toLocaleString()} تومان
                  </td>

                  {/* Stock */}
                  <td className="whitespace-nowrap px-3 py-3 text-center text-sm text-gray-600">
                    {(product.stock_gram / 1000).toLocaleString()} کیلو
                  </td>

                  {/* Image */}
                  <td className="px-3 py-3">
                    <div
                      className="
                        relative
                        mx-auto
                        h-11
                        w-11
                        overflow-hidden
                        rounded-xl
                        bg-gray-100
                      "
                    >
                      {product.image_url ? (
                        <Image
                          src={product.image_url}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center text-[10px] text-gray-400">
                          بدون عکس
                        </div>
                      )}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-3 py-3">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedProduct(product);
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
                          setSelectedProduct(product);
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

      {/* Mobile Cards */}
      <div className="space-y-3 md:hidden">
        {products.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
            هیچ محصولی وجود ندارد
          </div>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="
                rounded-2xl
                border
                border-gray-100
                bg-white
                p-4
                shadow-sm
              "
            >
              {/* Product Info */}
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
                  {product.image_url ? (
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[10px] text-gray-400">
                      بدون عکس
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="min-w-0 flex-1">
                  <div className="mb-1 flex items-center justify-between gap-2">
                    <h3 className="truncate text-sm font-bold text-gray-800">
                      {product.name}
                    </h3>

                    <span className="shrink-0 text-xs font-bold text-gray-400">
                      #{product.id}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-[#0b5b3c]">
                    {Number(product.price_per_kg).toLocaleString()} تومان
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    موجودی: {(product.stock_gram / 1000).toLocaleString()} کیلو
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div
                className="
                  mt-3
                  flex
                  gap-2
                  border-t
                  border-gray-100
                  pt-3
                "
              >
                <button
                  onClick={() => {
                    setSelectedProduct(product);
                    setIsEditOpen(true);
                  }}
                  className="
                    flex-1
                    rounded-lg
                    bg-blue-500
                    py-2
                    text-sm
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
                    setSelectedProduct(product);
                    setIsDeleteOpen(true);
                  }}
                  className="
                    flex-1
                    rounded-lg
                    bg-red-500
                    py-2
                    text-sm
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

{/* Add Product */}
      <Modal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} size="lg">
        <AddProduct onClose={() => setIsAddOpen(false)} />
      </Modal>


{/* Edit Product */}
<Modal
  isOpen={isEditOpen}
  onClose={closeEdit}
  size="lg"
>
  {selectedProduct && (
    <EditProductForm
      product={selectedProduct}
      onClose={closeEdit}
    />
  )}
</Modal>


{/* Delete Product */}
<Modal
  isOpen={isDeleteOpen}
  onClose={closeDelete}
  size="sm"
>
  <DeleteConfirmModal
    title="محصول"
    itemName={selectedProduct?.name}
    loading={loading}
    onClose={closeDelete}
    onConfirm={handleDelete}
  />
</Modal>
    </div>
  );
}
