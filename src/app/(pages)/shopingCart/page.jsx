"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "@/app/store/cart/shoppingCartSlice";
import Header from "@/app/layout/Header";
import Image from "next/image";

export default function ShoppingCartPage() {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {/* Page Title */}
            Shopping Cart
          </h1>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT – Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-sm"
                >
                  {/* Product */}
                  <div className="flex items-center gap-4 w-full">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg border"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.price.toLocaleString()} Toman
                      </p>
                    </div>
                  </div>

                  {/* Quantity + Remove */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 border rounded-lg px-3 py-1">
                      <button
                        onClick={() => dispatch(decreaseQuantity(item.id))}
                        className="text-lg font-bold text-gray-700 hover:text-black"
                      >
                        −
                      </button>
                      <span className="font-medium text-gray-900">
                        {item.quantity}
                      </span>
                    </div>

                    <button
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="text-sm text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT – Summary */}
            <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
              <h2 className="text-lg font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Items</span>
                  <span>{totalQuantity}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>{totalPrice.toLocaleString()} Toman</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-semibold text-gray-900">
                  <span>Total</span>
                  <span className="text-green-600">
                    {totalPrice.toLocaleString()} Toman
                  </span>
                </div>
              </div>

              <button className="mt-6 w-full rounded-lg bg-green-600 py-3 text-white font-semibold hover:bg-green-700 transition">
                Checkout
              </button>

              <button
                onClick={() => dispatch(clearCart())}
                className="mt-3 w-full text-sm text-red-500 hover:underline"
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
