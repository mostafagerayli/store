"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getShippingInfo } from "@/app/lib/getShippingInfo";

interface OrderSummaryProps {
  totalQuantity: number;
  totalPrice: number;
  onClearCart: () => void;
}

export default function OrderSummary({
  totalQuantity,
  totalPrice,
  onClearCart,
}: OrderSummaryProps) {

  const [freeShippingThreshold, setFreeShippingThreshold] =
    useState(10000000);


  useEffect(() => {

    async function fetchShippingInfo() {

      const data = await getShippingInfo();

      setFreeShippingThreshold(
        data.freeShippingThreshold
      );

    }


    fetchShippingInfo();

  }, []);



  const remainingPrice =
    freeShippingThreshold - totalPrice;


  return (
    <div className="h-fit rounded-xl bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-lg font-bold text-gray-900">
        خلاصه سفارش
      </h2>


      <div className="space-y-4 text-sm">

        <div className="flex justify-between text-gray-600">
          <span>
            آیتم
          </span>

          <span>
            {totalQuantity}
          </span>
        </div>


        <div className="flex justify-between text-gray-600">
          <span>
            جمع قیمت
          </span>

          <span>
            {totalPrice.toLocaleString()} تومان
          </span>
        </div>


        <div className="flex justify-between border-t pt-4 font-semibold text-gray-900">

          <span>
            قیمت نهایی
          </span>

          <span className="text-green-600">
            {totalPrice.toLocaleString()} تومان
          </span>

        </div>

      </div>


      {totalPrice >= freeShippingThreshold ? (

        <div className="mt-5 rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          🎉 تبریک! هزینه ارسال سفارش شما رایگان است.
        </div>

      ) : (

        <div className="mt-5 rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-600">

          با خرید{" "}

          <span className="font-bold text-[#0b5b3c]">
            {remainingPrice.toLocaleString()} تومان
          </span>

          {" "}دیگر، هزینه ارسال برای شما رایگان می‌شود.

        </div>

      )}



      <Link
        href="/checkout"
        className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-[#0b5b3c] text-sm font-bold text-white transition-all duration-200 hover:bg-[#08452d] hover:shadow-md"
      >
        ادامه ثبت سفارش
      </Link>


      <button
        onClick={onClearCart}
        className="mt-3 w-full text-sm text-red-500 hover:underline"
      >
        حذف سبد
      </button>


    </div>
  );
}