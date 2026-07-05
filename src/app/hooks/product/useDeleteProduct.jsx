"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { deleteProduct } from "@/app/lib/actions/product.actions";

export default function useDeleteProduct(onSuccess) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const remove = async (id) => {
    try {
      setLoading(true);

      await deleteProduct(id);

      toast.success("محصول با موفقیت حذف شد");

      onSuccess?.();
      router.refresh();
    } catch (error) {
      toast.error(error?.message || "خطا در حذف محصول");
    } finally {
      setLoading(false);
    }
  };

  return {
    remove,
    loading,
  };
}