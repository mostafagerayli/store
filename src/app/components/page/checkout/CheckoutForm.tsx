"use client";

import { useForm } from "react-hook-form";

import InputField from "@/app/components/input/InputField";
import { useCreateOrder } from "@/app/hooks/order/useCreateOrder";
import { OrderFormData } from "@/types/order";
import { toast } from "react-toastify";
import { createPayment } from "@/app/lib/actions/payment.actions";

export default function CheckoutForm() {
  const { submitOrder } = useCreateOrder();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormData>();

  const inputClass =
    "mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#0b5b3c]";

  const onSubmit = async (data: OrderFormData) => {
    try {
      const result = await submitOrder(data);

      if (!result.success || !result.orderId) {
        toast.error(result.message);
        return;
      }

      const payment = await createPayment(result.orderId);

      if (!payment.success || !payment.url) {
        toast.error(payment.message);
        return;
      }

      window.location.href = payment.url;
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "خطایی رخ داد");
    }
  };

  return (
    <div className="sticky top-6">
      <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-lg">
        <h2 className="mb-6 mt-4 text-2xl font-black text-[#0b5b3c]">
          اطلاعات گیرنده
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <InputField<OrderFormData>
              label="نام و نام خانوادگی"
              name="full_name"
              register={register}
              rules={{
                required: "نام و نام خانوادگی الزامی است",
              }}
              error={errors.full_name?.message}
            />

            <InputField<OrderFormData>
              label="شماره موبایل"
              name="phone"
              placeholder="09xxxxxxxxxx"
              inputMode="numeric"
              register={register}
              rules={{
                required: "شماره موبایل الزامی است",
                pattern: {
                  value: /^09\d{9}$/,
                  message: "شماره موبایل معتبر نیست",
                },
              }}
              error={errors.phone?.message}
            />

            <InputField<OrderFormData>
              label="استان"
              name="province"
              register={register}
              rules={{
                required: "استان الزامی است",
              }}
              error={errors.province?.message}
            />

            <InputField<OrderFormData>
              label="شهر"
              name="city"
              register={register}
              rules={{
                required: "شهر الزامی است",
              }}
              error={errors.city?.message}
            />
          </div>

          <div>
            <label className="text-sm font-bold text-gray-600">آدرس کامل</label>

            <textarea
              {...register("address", {
                required: "آدرس الزامی است",
              })}
              rows={4}
              placeholder="آدرس کامل خود را وارد کنید..."
              className={`${inputClass} resize-none`}
            />

            {errors.address && (
              <p className="mt-1 text-xs text-red-500">
                {errors.address.message}
              </p>
            )}
          </div>

          <InputField<OrderFormData>
            label="کد پستی (اختیاری)
پیشنهاد می‌شود برای ارسال دقیق‌تر وارد شود."
            name="postal_code"
            placeholder=""
            inputMode="numeric"
            register={register}
            rules={{
              pattern: {
                value: /^\d{10}$/,
                message: "کد پستی باید ۱۰ رقم باشد",
              },
            }}
            error={errors.postal_code?.message}
          />

          <div>
            <label className="text-sm font-bold text-gray-600">
              توضیحات سفارش (اختیاری)
            </label>

            <textarea
              {...register("description")}
              rows={3}
              placeholder="اگر توضیحی درباره سفارش دارید بنویسید..."
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-[#0b5b3c] py-3 font-bold text-white transition hover:bg-[#08452d] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "در حال ثبت سفارش..." : "ادامه و پرداخت"}
          </button>
        </form>
      </div>
    </div>
  );
}
