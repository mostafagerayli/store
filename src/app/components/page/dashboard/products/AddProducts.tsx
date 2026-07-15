"use client";

import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Image from "next/image";
import { ProductFormData } from "@/types/product";
import { useAddProduct } from "@/app/hooks/product/useAddProduct";
import InputField from "@/app/components/input/InputField";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ProductFormData>();

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addProduct } = useAddProduct();

  const onSubmit = async (data: ProductFormData) => {
    await addProduct({
      ...data,
      image,
    });
  };
  const handleFile = (file: File | null) => {
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };
  const inputClass =
    "w-full mt-2 px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#0b5b3c] transition";

  return (
    <div className="sticky top-6">
      <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6">
        <h1 className="text-3xl font-black text-[#0b5b3c] mb-4 mt-6">
          افزودن محصول
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8  space-y-5"
        >
          {/* نام محصول */}
          <InputField<ProductFormData>
            label="نام محصول"
            name="name"
            placeholder=" مثال : پسته اکبری"
            register={register}
            rules={{
              required: "نام محصول الزامی است",
            }}
            error={errors.name?.message}
          />

          {/* قیمت */}
          <InputField<ProductFormData>
            name="price_per_kg"
            label="قیمت هر کیلو (تومان)"
            inputMode="numeric"
            placeholder="مثال : 2,000,000"
            register={register}
            rules={{
              required: "قیمت هر کیلو الزامی است",
              pattern: {
                value: /^\d+$/,
                message: "قیمت باید عدد باشد",
              },
            }}
            error={errors.price_per_kg?.message}
          />

          {/* موجودی */}
<InputField<ProductFormData>
  name="stock"
  label="موجودی (کیلو)"
  inputMode="numeric"
  placeholder="مثال : 10"
  register={register}
  rules={{
    required: "موجودی الزامی است",
    pattern: {
      value: /^\d+$/,
      message: "موجودی باید عدد باشد",
    },
  }}
  error={errors.stock?.message}
/>

          {/* عکس */}
          <div
            className="border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files[0] ?? null);
            }}
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              ref={fileInputRef}
              id="fileInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />

            {preview ? (
              <div className="relative h-40 w-full mx-auto rounded-xl overflow-hidden">
                <Image
                  src={preview}
                  alt="preview"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <p className="text-gray-500">عکس را بکشید و اینجا رها کنید</p>
            )}
          </div>

          {/* توضیحات */}
          <div>
            <label className="text-sm font-bold text-gray-600">توضیحات</label>
            <textarea
              {...register("description")}
              className={`${inputClass} h-28`}
            />

            {errors.description && (
              <p className="mt-1 text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#0b5b3c] text-white py-3 rounded-2xl font-bold hover:bg-[#08452d] transition"
          >
            {isSubmitting ? "در حال ذخیره محصول..." : "ذخیره محصول"}
          </button>
        </form>
      </div>
    </div>
  );
}
