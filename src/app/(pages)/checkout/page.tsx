"use client";


import {
  useAppSelector,
} from "@/app/store/hook";

import {
  selectCartItems,
  selectCartQuantity,
  selectCartTotal,
} from "@/app/store/cart/shoppingCartSlice";
import CheckoutForm from "@/app/components/page/checkout/CheckoutForm";
import Header from "@/app/layout/Header";
import CheckoutSummary from "@/app/components/page/checkout/CheckoutSummary";
import Footer from "@/app/layout/Footer";

export default function CheckoutPage() {
  const items = useAppSelector(selectCartItems);
  const totalPrice = useAppSelector(selectCartTotal);
  const totalQuantity = useAppSelector(selectCartQuantity);

  const shippingPrice = totalPrice > 0 ? 80000 : 0;
  const finalPrice = totalPrice + shippingPrice;

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#fdfdf9] py-10 px-4">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">
            تکمیل سفارش
          </h1>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* فرم اطلاعات */}
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            {/* خلاصه سفارش */}
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