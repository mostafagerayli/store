"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { useAppDispatch, useAppSelector } from "@/app/store/hook";

import {
  selectCartItems,
  selectCartQuantity,
  selectCartTotal,
  updateCartPrices,
} from "@/app/store/cart/shoppingCartSlice";


import CheckoutForm from "@/app/components/page/checkout/CheckoutForm";
import Header from "@/app/layout/Header";
import CheckoutSummary from "@/app/components/page/checkout/CheckoutSummary";
import Footer from "@/app/layout/Footer";
import { getCartPrices } from "@/app/lib/getCartPrices";

export default function CheckoutPage() {
  const dispatch = useAppDispatch();

  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotal);
  const totalQuantity = useAppSelector(selectCartQuantity);

  const [isSyncing, setIsSyncing] = useState(true);

  useEffect(() => {
    const syncCartPrices = async () => {
      if (items.length === 0) {
        setIsSyncing(false);
        return;
      }

      try {
        const currentPrices = await getCartPrices(
          items.map((item) => ({
            id: item.id,
            selectedWeight: item.selectedWeight,
          })),
        );

        const hasPriceChanged = currentPrices.some((currentItem) => {
          const cartItem = items.find(
            (item) =>
              item.id === currentItem.id &&
              item.selectedWeight === currentItem.selectedWeight,
          );

          return cartItem?.price !== currentItem.price;
        });

        if (hasPriceChanged) {
          dispatch(updateCartPrices(currentPrices));

          toast.info("سبد خرید شما به‌روزرسانی شد.");
        }
      } catch (error) {
        console.error("Failed to sync cart prices:", error);
      } finally {
        setIsSyncing(false);
      }
    };

    syncCartPrices();
  }, [dispatch]);

  const shippingPrice = totalPrice > 0 ? 80000 : 0;
  const finalPrice = totalPrice + shippingPrice;

  if (isSyncing) {
    return (
      <>
        <Header />

        <main className="flex min-h-screen items-center justify-center bg-[#fdfdf9]">
          <div className="text-center">
            <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900" />

            <p className="text-gray-600">
              در حال بررسی قیمت محصولات...
            </p>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fdfdf9] px-4 py-10">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            تکمیل سفارش
          </h1>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            <div className="lg:col-span-1">
              <CheckoutSummary
                items={items}
                totalQuantity={totalQuantity}
                totalPrice={totalPrice}
                shippingPrice={shippingPrice}
                finalPrice={finalPrice}
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}