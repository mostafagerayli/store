'use client'
import ClientLayout from "@/app/layout/ClientLayout";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, removeFromCart, clearCart } from "@/app/store/cart/shoppingCartSlice";

function ShoppingCartPage() {
  const { items, totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">سبد خرید شما</h1>

      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between border-b py-4">
            
            {/* تصویر و عنوان */}
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded"/>
              <div>
                <p className="font-medium">{item.title}</p>
                <p className="text-white">{item.price.toLocaleString()} Toman</p>
              </div>
            </div>

            {/* تعداد و حذف */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.id))}
                className="px-2 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="px-2 py-1 bg-red-500 text-white rounded"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* جمع کل و دکمه پاک کردن */}
      <div className="mt-6 flex justify-between items-center">
        <div className="text-lg font-bold">
          مجموع ({totalQuantity} آیتم): {totalPrice.toLocaleString()} Toman
        </div>
        <button
          onClick={() => dispatch(clearCart())}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          پاک کردن سبد
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
