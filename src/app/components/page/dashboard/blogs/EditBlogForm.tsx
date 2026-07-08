"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { useRef, useState } from "react";

import InputField from "@/app/components/input/InputField";
import { useEditBlog } from "@/app/hooks/blog/useEditBlog";
import { Blog } from "@/types/blog";

type BlogFormData = {
  title: string;
  description: string;
  content: string;
  category: string;
};

type EditBlogFormProps = {
  blog: Blog;
  onClose: () => void;
};

export default function EditBlogForm({ blog, onClose }: EditBlogFormProps) {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(blog.image);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { edit } = useEditBlog(blog.id, onClose);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<BlogFormData>({
    defaultValues: {
      title: blog.title,
      description: blog.description,
      content: blog.content,
      category: blog.category,
    },
  });

  const handleFile = (file: File | null) => {
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const onSubmit = async (data: BlogFormData) => {
    await edit({
      ...data,
      image,
    });
  };

  const inputClass =
    "mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-[#0b5b3c] md:text-base";

  return (
    <div className="max-h-[80vh] overflow-y-auto px-1">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 p-1 sm:p-2">
        {/* Header */}
        <div className="border-b pb-4">
          <h3 className="text-lg font-black text-[#0b5b3c] sm:text-xl">
            ویرایش پست
          </h3>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            اطلاعات مقاله را بروزرسانی کنید
          </p>
        </div>

        {/* Title */}
        <InputField<BlogFormData>
          label="عنوان پست"
          name="title"
          register={register}
          rules={{
            required: "عنوان الزامی است",
          }}
          error={errors.title?.message}
        />

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-600">
            دسته بندی مقاله
          </label>

          <select
            {...register("category", {
              required: "انتخاب دسته بندی الزامی است",
            })}
            className="
      mt-2
      w-full
      rounded-2xl
      border
      border-gray-200
      px-4
      py-3
      text-sm
      outline-none
      transition
      focus:border-[#0b5b3c]
      md:text-base
    "
          >
            <option value="">انتخاب دسته بندی</option>

            <option value="خواص پسته">خواص پسته</option>

            <option value="راهنمای خرید">راهنمای خرید</option>

            <option value="تغذیه سالم">تغذیه سالم</option>
          </select>

          {errors.category && (
            <p className="mt-1 text-xs text-red-500">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Image */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-600">
            تصویر مقاله
          </label>

          <div
            className="
              cursor-pointer 
              rounded-2xl 
              border-2 
              border-dashed 
              border-gray-200 
              p-4
              transition
              hover:border-[#0b5b3c]
              sm:p-5
            "
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();

              handleFile(e.dataTransfer.files[0] ?? null);
            }}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
            />

            {preview ? (
              <div
                className="
                relative 
                h-36 
                w-full 
                overflow-hidden 
                rounded-2xl
                sm:h-44
              "
              >
                <Image
                  src={preview}
                  alt="preview"
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="py-8 text-center">
                <p className="text-sm font-semibold text-gray-600">
                  برای تغییر تصویر کلیک کنید
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  یا فایل را اینجا رها کنید
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-bold text-gray-600">
            توضیحات کوتاه
          </label>

          <textarea
            {...register("description", {
              required: "توضیحات الزامی است",
            })}
            className={`${inputClass} h-28 resize-none`}
          />

          {errors.description && (
            <p className="mt-1 text-xs text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Content */}
        <div>
          <label className="text-sm font-bold text-gray-600">متن مقاله</label>

          <textarea
            {...register("content", {
              required: "متن مقاله الزامی است",
            })}
            className={`${inputClass} h-48 resize-none sm:h-56`}
          />

          {errors.content && (
            <p className="mt-1 text-xs text-red-500">
              {errors.content.message}
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          className="
            flex 
            flex-col-reverse 
            gap-3 
            border-t 
            pt-4
            sm:flex-row
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              flex-1 
              rounded-2xl 
              bg-gray-100 
              py-3 
              text-sm
              font-bold 
              text-gray-700
              transition
              hover:bg-gray-200
            "
          >
            انصراف
          </button>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              flex-1 
              rounded-2xl 
              bg-[#0b5b3c]
              py-3
              text-sm
              font-bold
              text-white
              transition
              hover:bg-[#08452d]
              disabled:opacity-50
            "
          >
            {isSubmitting ? "در حال ذخیره..." : "ذخیره تغییرات"}
          </button>
        </div>
      </form>
    </div>
  );
}
