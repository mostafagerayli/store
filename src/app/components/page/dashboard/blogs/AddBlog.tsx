"use client";

import { useForm } from "react-hook-form";
import { useRef, useState } from "react";
import Image from "next/image";
import { useAddBlog } from "@/app/hooks/blog/useAddBlog";
import InputField from "@/app/components/input/InputField";

type BlogFormData = {
  title: string;
  description: string;
  content: string;
};

export default function AddBlog() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormData>();

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { addBlog } = useAddBlog();


  const onSubmit = async (data: BlogFormData) => {
    await addBlog({
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
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg">

        <h1 className="mb-4 mt-6 text-3xl font-black text-[#0b5b3c]">
          افزودن پست جدید
        </h1>


        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 bg-white p-8"
        >

          {/* عنوان */}
          <InputField<BlogFormData>
            label="عنوان پست"
            name="title"
            placeholder="مثال : آموزش کامل Next.js"
            register={register}
            rules={{
              required: "عنوان پست الزامی است",
            }}
            error={errors.title?.message}
          />


          {/* عکس */}
          <div
            className="cursor-pointer rounded-2xl border-2 border-dashed p-6 text-center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFile(e.dataTransfer.files[0] ?? null);
            }}
            onClick={() =>
              fileInputRef.current?.click()
            }
          >

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) =>
                handleFile(
                  e.target.files?.[0] ?? null
                )
              }
            />


            {preview ? (
              <div className="relative mx-auto h-40 w-full overflow-hidden rounded-xl">
                <Image
                  src={preview}
                  alt="preview"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <p className="text-gray-500">
                عکس مقاله را بکشید و اینجا رها کنید
              </p>
            )}

          </div>


          {/* توضیحات کوتاه */}
          <div>
            <label className="text-sm font-bold text-gray-600">
              توضیحات کوتاه
            </label>

            <textarea
              {...register("description", {
                required:
                  "توضیحات کوتاه الزامی است",
                minLength: {
                  value: 20,
                  message:
                    "توضیحات حداقل ۲۰ کاراکتر باشد",
                },
              })}
              className={`${inputClass} h-28`}
            />

            {errors.description && (
              <p className="mt-1 text-xs text-red-500">
                {errors.description.message}
              </p>
            )}

          </div>


          {/* محتوا */}
          <div>
            <label className="text-sm font-bold text-gray-600">
              متن مقاله
            </label>

            <textarea
              {...register("content", {
                required:
                  "متن مقاله الزامی است",
                minLength: {
                  value: 50,
                  message:
                    "متن مقاله حداقل ۵۰ کاراکتر باشد",
                },
              })}
              className={`${inputClass} h-52`}
            />

            {errors.content && (
              <p className="mt-1 text-xs text-red-500">
                {errors.content.message}
              </p>
            )}

          </div>


          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-[#0b5b3c] py-3 font-bold text-white transition hover:bg-[#08452d]"
          >
            {isSubmitting
              ? "در حال ذخیره پست..."
              : "ذخیره پست"}
          </button>

        </form>

      </div>
    </div>
  );
}