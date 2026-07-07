"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Image from "next/image";
import InputField from "../../input/InputField";
import { Product, ProductFormData } from "@/types/product";
import { useEditProduct } from "@/app/hooks/product/useEditProduct";
import { useRef } from "react";

type EditProductFormProps = {
  product: Product;
  onClose: () => void;
};
export default function EditProductForm({
  product,
  onClose,
}: EditProductFormProps) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(product?.image_url);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { edit } = useEditProduct(product.id, onClose);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      name: product?.name,
      weight: Number(product?.weight),
      price: Number(product?.price),
      stock: Number(product?.stock),
      description: product?.description ?? "",
    },
  });

  const handleFile = (file: File | null) => {
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data: ProductFormData) => {
    await edit({
      ...data,
      image,
    });
  };

  const inputClass =
    "w-full mt-2 px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#0b5b3c] transition";

  return (
    <div className="px-1">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Header */}
        <div className="pb-4 border-b">
          <h3 className="text-xl font-black text-[#0b5b3c]">ویرایش محصول</h3>

          <p className="text-sm text-gray-500 mt-1">
            اطلاعات محصول را بروزرسانی کنید
          </p>
        </div>

        {/* نام محصول */}
        <InputField
          label="نام محصول"
          name="name"
          register={register}
          rules={{
            required: "نام محصول الزامی است",
          }}
          error={errors.name?.message}
        />

        {/* وزن */}
        <InputField
          label="وزن (کیلوگرم)"
          name="weight"
          inputMode="numeric"
          register={register}
          rules={{
            required: "وزن الزامی است",
          }}
          error={errors.weight?.message}
        />

        {/* قیمت */}
        <InputField
          label="قیمت (تومان)"
          name="price"
          inputMode="numeric"
          register={register}
          rules={{
            required: "قیمت الزامی است",
          }}
          error={errors.price?.message}
        />

        {/* موجودی */}
        <InputField
          label="موجودی"
          name="stock"
          inputMode="numeric"
          register={register}
          rules={{
            required: "موجودی الزامی است",
          }}
          error={errors.stock?.message}
        />

        {/* تصویر */}
        <div>
          <label className="text-sm font-bold text-gray-600 mb-2 block">
            تصویر محصول
          </label>

          <div
            className="border-2 border-dashed border-gray-200 hover:border-[#0b5b3c] rounded-2xl p-5 text-center cursor-pointer transition"
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files[0] ?? null);
            }}
          >
            <input
              ref={fileInputRef}
              id="editImage"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />

            {preview ? (
              <div className="relative h-44 w-full rounded-2xl overflow-hidden">
                <Image
                  src={preview}
                  alt="preview"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="py-8">
                <p className="font-semibold text-gray-600">
                  برای تغییر تصویر کلیک کنید
                </p>

                <p className="text-sm text-gray-400 mt-1">
                  یا فایل را اینجا رها کنید
                </p>
              </div>
            )}
          </div>
        </div>

        {/* توضیحات */}
        <div>
          <label className="text-sm font-bold text-gray-600">
            توضیحات محصول
          </label>

          <textarea
            {...register("description", {
              required: "توضیحات الزامی است",
            })}
            className={`${inputClass} h-32 resize-none`}
            placeholder="توضیحات محصول..."
          />

          {errors.description && (
            <p className="mt-1 text-xs text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="flex gap-3 pt-4 border-t">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-2xl bg-gray-100 py-3 font-bold text-gray-700 hover:bg-gray-200 transition"
          >
            انصراف
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 rounded-2xl bg-[#0b5b3c] py-3 font-bold text-white hover:bg-[#08452d] transition disabled:opacity-50"
          >
            {isSubmitting ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </button>
        </div>
      </form>
    </div>
  );
}
