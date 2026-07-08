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
  category: string;
};
interface AddBlogProps {
  onClose: () => void;
}

export default function AddBlog({ onClose }: AddBlogProps) {
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
    const success = await addBlog({
      ...data,
      image,
    });

    if (success) {
      onClose();
    }
  };

  const handleFile = (file: File | null) => {
    if (!file) return;

    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const inputClass = `
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
    `;

  return (
    <div className="max-h-[80vh] overflow-y-auto px-1">
      <div
        className="
        rounded-3xl
        bg-white
        p-3
        sm:p-6
      "
      >
        {/* Header */}

        <div
          className="
          mb-5
          border-b
          pb-4
        "
        >
          <h1
            className="
            text-xl
            font-black
            text-[#0b5b3c]
            sm:text-3xl
          "
          >
            افزودن پست جدید
          </h1>

          <p
            className="
            mt-2
            text-xs
            text-gray-500
            sm:text-sm
          "
          >
            ایجاد مقاله جدید برای وبلاگ
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
            space-y-5
          "
        >
          {/* Title */}

          <InputField<BlogFormData>
            label="عنوان پست"
            name="title"
            placeholder="خواص پسته"
            register={register}
            rules={{
              required: "عنوان پست الزامی است",
            }}
            error={errors.title?.message}
          />
          {/* Category */}

          <div>
            <label
              className="
    mb-2
    block
    text-sm
    font-bold
    text-gray-600
    "
            >
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
              <p
                className="
      mt-1
      text-xs
      text-red-500
      "
              >
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Image */}

          <div>
            <label
              className="
              mb-2
              block
              text-sm
              font-bold
              text-gray-600
            "
            >
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
                text-center
                transition
                hover:border-[#0b5b3c]
                sm:p-6
              "
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();

                handleFile(e.dataTransfer.files[0] ?? null);
              }}
              onClick={() => fileInputRef.current?.click()}
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
                    className="
                      object-cover
                    "
                  />
                </div>
              ) : (
                <div className="py-8">
                  <p
                    className="
                    text-sm
                    text-gray-500
                  "
                  >
                    عکس مقاله را بکشید و اینجا رها کنید
                  </p>

                  <p
                    className="
                    mt-2
                    text-xs
                    text-gray-400
                  "
                  >
                    یا کلیک کنید و فایل انتخاب کنید
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Description */}

          <div>
            <label
              className="
              text-sm
              font-bold
              text-gray-600
            "
            >
              توضیحات کوتاه
            </label>

            <textarea
              {...register("description", {
                required: "توضیحات کوتاه الزامی است",

                minLength: {
                  value: 10,

                  message: "توضیحات حداقل 10 کاراکتر باشد",
                },
              })}
              className="
                h-28
                resize-none
                w-full
                mt-2
                rounded-2xl
                border
                border-gray-200
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#0b5b3c]
              "
            />

            {errors.description && (
              <p
                className="
                mt-1
                text-xs
                text-red-500
              "
              >
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Content */}

          <div>
            <label
              className="
              text-sm
              font-bold
              text-gray-600
            "
            >
              متن مقاله
            </label>

            <textarea
              {...register("content", {
                required: "متن مقاله الزامی است",

                minLength: {
                  value: 10,

                  message: "متن مقاله حداقل 10 کاراکتر باشد",
                },
              })}
              className="
                h-48
                resize-none
                w-full
                mt-2
                rounded-2xl
                border
                border-gray-200
                px-4
                py-3
                text-sm
                outline-none
                transition
                focus:border-[#0b5b3c]
                sm:h-52
              "
            />

            {errors.content && (
              <p
                className="
                mt-1
                text-xs
                text-red-500
              "
              >
                {errors.content.message}
              </p>
            )}
          </div>

          {/* Submit */}

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full
              rounded-2xl
              bg-[#0b5b3c]
              py-3
              text-sm
              font-bold
              text-white
              transition
              hover:bg-[#08452d]
              disabled:opacity-50
              sm:text-base 
            "
          >
            {isSubmitting ? "در حال ذخیره پست..." : "ذخیره پست"}
          </button>
        </form>
      </div>
    </div>
  );
}
