"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";

export default function EditProductForm({ product, onClose }) {
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(product?.image_url || null);
  const { register, handleSubmit } = useForm({
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
  const formData = new FormData();

  formData.append("name", data.name);
  formData.append("weight", data.weight);
  formData.append("price", data.price);
  formData.append("stock", data.stock);
  formData.append("description", data.description);

  if (image) {
    formData.append("image", image);
  }

  const res = await fetch(`/api/products/${product.id}`, {
    method: "PUT",
    body: formData,
  });

  if (!res.ok) {
    alert("خطا در آپدیت");
    return;
  }

  router.refresh();
  onClose();
};

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

      <div
        className="border-2 border-dashed rounded-xl p-4 text-center cursor-pointer"
        onClick={() => document.getElementById("editImage").click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          const file = e.dataTransfer.files[0];
          setImage(file);
          setPreview(URL.createObjectURL(file));
        }}
      >
        <input
          id="editImage"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files[0];
            setImage(file);
            setPreview(URL.createObjectURL(file));
          }}
        />

{preview ? (
  <div className="relative w-full h-32 mx-auto rounded-lg overflow-hidden">
    <Image
      src={preview}
      alt="preview"
      fill
      className="object-cover"
    />
  </div>
) : (
  <p>برای تغییر تصویر کلیک یا درگ کن</p>
)}
      </div>

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
