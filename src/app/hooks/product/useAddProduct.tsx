"use client"
import { createProduct } from "@/app/lib/actions/product.actions";
import { ProductFormData } from "@/types/product";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type AddProductData = ProductFormData & {
  image: File | null;
};

export function useAddProduct() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  

  const addProduct = async (data: AddProductData) => {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("weight", String(data.weight));
      formData.append("price", String(data.price));
      formData.append("stock", String(data.stock));
      formData.append("description", data.description);

      // 📦 فایل
      if (data.image) {
        formData.append("image", data.image);
      }

      await createProduct(formData);

      toast.success("محصول با موفقیت اضافه شد");
      router.refresh();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "خطا");
    } finally {
      setLoading(false);
    }
  };

  return { addProduct, loading };
}