"use client";

import { useForm } from "react-hook-form";
import InputField from "../input/InputField";

export default function AddProduct() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log(result);
      if (result.status === 200) {
        alert("محصول با موفقیت اضافه شد");
      } else {
        alert("خطا در ثبت محصول");
      }
    } catch (err) {
      console.log(err);
      alert("مشکل در اتصال به سرور");
    }
    reset();
  };

  const inputClass =
    "w-full mt-2 px-4 py-3 rounded-2xl border border-gray-200 outline-none focus:border-[#0b5b3c] transition";

  return (
    <div className="min-h-screen bg-[#f7f5ef] p-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-black text-[#0b5b3c] mb-6">
          افزودن محصول
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-8 rounded-[28px] shadow-xl space-y-5"
        >
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
            name="weight"
            label="وزن (گرم)"
            inputMode="numeric"
            register={register}
            rules={{
              required: "وزن الزامی است",
              pattern: {
                value: /^\d+(\.\d+)?$/,
                message: "وزن باید عدد معتبر باشد",
              },
            }}
            error={errors.weight?.message}
          />

          {/* قیمت */}
          <InputField
            name="price"
            label="قیمت"
            inputMode="numeric"
            register={register}
            rules={{
              required: "قیمت الزامی است",
              pattern: {
                value: /^\d+$/,
                message: "قیمت باید عدد باشد",
              },
            }}
            error={errors.price?.message}
          />

          {/* موجودی */}
          <InputField
            name="stock"
            label="موجودی"
            inputMode="numeric"
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
          <InputField
            name="imageURL"
            label="ادرس تصویر"
            register={register}
            error={errors.imageURL?.message}
          />

          {/* توضیحات */}
          <div>
            <label className="text-sm font-bold text-gray-600">توضیحات</label>
            <textarea
              {...register("description", {
                required: "توضیحات الزامی است",
              })}
              className={`${inputClass} h-28`}
            />

            {errors.description && (
              <p className="mt-1 text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          <button className="w-full mt-4 bg-[#0b5b3c] text-white py-3 rounded-2xl font-bold hover:bg-[#08452d] transition">
            ثبت محصول
          </button>
        </form>
      </div>
    </div>
  );
}
