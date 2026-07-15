"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { editProduct } from "@/app/lib/actions/product.actions";
import type { ProductFormData } from "@/types/product";

type EditProductData = ProductFormData & {
  image: File | null;
};

export function useEditProduct(productId: number, onClose?: () => void) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const edit = async (data: EditProductData) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);

      formData.append("price_per_kg", String(data.price_per_kg));

      formData.append("stock", String(data.stock));

      formData.append("description", data.description ?? "");

      if (data.image) {
        formData.append("image_url", data.image);
      }

      const result = await editProduct(productId, formData);

      if (!result.success) {
        throw new Error(result.message || "خطا در ویرایش محصول");
      }

      toast.success("محصول با موفقیت ویرایش شد");

      router.refresh();

      onClose?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "خطا در ویرایش");
    } finally {
      setLoading(false);
    }
  };

  return {
    edit,
    loading,
  };
}
