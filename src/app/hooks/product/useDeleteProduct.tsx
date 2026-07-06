"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import { deleteProduct } from "@/app/lib/actions/product.actions";

export default function useDeleteProduct(
  onSuccess?: () => void
) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const remove = async (
    id: number
  ): Promise<void> => {
    try {
      setLoading(true);

      const result = await deleteProduct(id);

      if (!result.success) {
        throw new Error(
          result.message ?? "خطا در حذف محصول"
        );
      }

      toast.success("محصول با موفقیت حذف شد");

      onSuccess?.();

      router.refresh();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "خطا در حذف محصول"
      );
    } finally {
      setLoading(false);
    }
  };

  return {
    remove,
    loading,
  };
}