"use client";

import { useEffect, useState } from "react";

import {
  selectCartQuantity,
  selectCartTotal,
} from "@/app/store/cart/shoppingCartSlice";

import { useAppSelector } from "@/app/store/hook";
import { getShippingInfo } from "@/app/lib/getShippingInfo";

import type { CartItem } from "@/types/cart";

interface CheckoutSummaryProps {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
  shippingPrice?: number;
  finalPrice?: number;
}

export default function CheckoutSummary({
  items,
  totalQuantity,
  totalPrice,
}: CheckoutSummaryProps) {
  const cartQuantity = useAppSelector(selectCartQuantity);
  const cartTotal = useAppSelector(selectCartTotal);

  const [shippingPrice, setShippingPrice] = useState(0);

  useEffect(() => {
    async function fetchShippingInfo() {
      const data = await getShippingInfo();

      const price =
        cartTotal >= data.freeShippingThreshold
          ? 0
          : data.shippingPrice;

      setShippingPrice(price);
    }

    fetchShippingInfo();
  }, [cartTotal]);

  const finalPrice = cartTotal + shippingPrice;

  return (
    <div className="h-fit rounded-3xl border border-gray-100 bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-xl font-black text-gray-900">
        خلاصه سفارش
      </h2>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>تعداد کالا</span>
          <span>{cartQuantity}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>مبلغ کالاها</span>
          <span>
            {cartTotal.toLocaleString()} تومان
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>هزینه ارسال</span>

          <span className="text-green-600">
            {shippingPrice === 0
              ? "رایگان"
              : `${shippingPrice.toLocaleString()} تومان`}
          </span>
        </div>

        <div className="flex justify-between border-t pt-4 text-lg font-bold">
          <span>مبلغ نهایی</span>

          <span className="text-[#0b5b3c]">
            {finalPrice.toLocaleString()} تومان
          </span>
        </div>
      </div>
    </div>
  );
}