"use client";

import { useForm } from "react-hook-form";

export default function AddProduct() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        console.log("محصول ثبت شد ✅", result.product);
        alert("محصول با موفقیت اضافه شد");
      } else {
        console.log("خطا ❌", result.error);
        alert("خطا در ثبت محصول");
      }
    } catch (err) {
      console.error("Network Error:", err);
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
          <div>
            <label className="text-sm font-bold text-gray-600">نام محصول</label>
            <input {...register("name")} className={inputClass} />
          </div>

          {/* وزن */}
          <div>
            <label className="text-sm font-bold text-gray-600">وزن</label>
            <input {...register("weight")} className={inputClass} />
          </div>

          {/* قیمت */}
          <div>
            <label className="text-sm font-bold text-gray-600">قیمت</label>
            <input {...register("price")} className={inputClass} />
          </div>

          {/* موجودی */}
          <div>
            <label className="text-sm font-bold text-gray-600">موجودی</label>
            <input {...register("stock")} className={inputClass} />
          </div>

          {/* عکس */}
          <div>
            <label className="text-sm font-bold text-gray-600">
              تصویر محصول
            </label>
            <input {...register("image-url")} className={inputClass} />
          </div>

          {/* توضیحات */}
          <div>
            <label className="text-sm font-bold text-gray-600">توضیحات</label>
            <textarea
              {...register("description")}
              className={`${inputClass} h-28`}
            />
          </div>

          <button className="w-full mt-4 bg-[#0b5b3c] text-white py-3 rounded-2xl font-bold hover:bg-[#08452d] transition">
            ثبت محصول
          </button>
        </form>
      </div>
    </div>
  );
}
