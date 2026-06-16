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
  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setDeleteOpen(true);
  };
  if (!products) {
    return <p>در حال بارگذاری...</p>;
  }

  const handleDelete = async () => {
    try {
      await deleteProduct(selectedProduct.id);
      router.refresh();
      setDeleteOpen(false);
      toast.success("محصول با موفقیت حذف شد");

    } catch (error) {
      toast.error("خطا در حذف محصول" || error.message);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-[1000px] w-full">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="p-3 text-center">id محصول</th>
              <th className="p-3 text-center">نام محصول</th>
              <th className="p-3 text-center">وزن</th>
              <th className="p-3 text-center">قیمت</th>
              <th className="p-3 text-center">موجودی/گرم</th>
              <th className="p-3 text-center">عکس</th>
              <th className="p-3 text-center">توضیحات</th>
              <th className="p-3 text-center">عملیات</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50">
                <td className="p-3 text-center font-semibold">{product.id}</td>

                <td className="p-3 text-center font-semibold">
                  {product.name}
                </td>

                <td className="p-3 text-center">
                  {Number(product.weight)}کیلوگرم
                </td>

                <td className="p-3 text-center">
                  {Number(product.price).toLocaleString()} تومان
                </td>

                <td className="p-3 text-center">{Number(product.stock)}</td>
                <td className="p-3 text-center">
                  <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden bg-gray-100 relative">
                    {product.image_url ? (
                      <Image
                        src={product.image_url}
                        alt={product.name || "product"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-gray-500">
                        بدون عکس
                      </div>
                    )}
                  </div>
                </td>
                <td className="p-3 text-center max-w-[250px] truncate">
                  {product.description}
                </td>
                <td className="p-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedProduct(product);
                        setOpen(true);
                      }}
                      className="px-3 py-2 rounded-xl bg-yellow-400 text-white hover:bg-yellow-600"
                    >
                      ویرایش
                    </button>

                    <button
                      className="px-3 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
                      onClick={() => openDeleteModal(product)}
                    >
                      حذف
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Modal
          isOpen={open}
          onClose={() => setOpen(false)}
          title="ویرایش محصول"
          size="lg"
        >
          <EditProductForm
            product={selectedProduct}
            onClose={() => setOpen(false)}
          />
        </Modal>
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
      </div>
    </div>
  );
}
