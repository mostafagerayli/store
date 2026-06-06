"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function EditProductForm({
  product,
  onClose,
}) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: product?.name,
      weight: product?.weight,
      price: product?.price,
      stock: product?.stock,
      image_url: product?.image_url,
      description: product?.description,
    },
  });

  const onSubmit = async (data) => {
    try {
      const res = await fetch(
        `/api/products/${product.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      router.refresh();
      onClose();
    } catch (error) {
      console.error(error);
      alert("خطا در بروزرسانی محصول");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4"
    >
      <input
        {...register("name")}
        placeholder="نام محصول"
        className="w-full rounded-xl border p-3"
      />

      <input
        {...register("weight")}
        placeholder="وزن"
        className="w-full rounded-xl border p-3"
      />

      <input
        {...register("price")}
        placeholder="قیمت"
        className="w-full rounded-xl border p-3"
      />

      <input
        {...register("stock")}
        placeholder="موجودی"
        className="w-full rounded-xl border p-3"
      />

      <input
        {...register("image_url")}
        placeholder="آدرس تصویر"
        className="w-full rounded-xl border p-3"
      />

      <textarea
        {...register("description")}
        placeholder="توضیحات"
        className="w-full rounded-xl border p-3"
      />

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          className="rounded-xl bg-gray-200 px-4 py-2"
        >
          انصراف
        </button>

        <button
          type="submit"
          className="rounded-xl bg-[#0b5b3c] px-4 py-2 text-white"
        >
          ذخیره تغییرات
        </button>
      </div>
    </form>
  );
}