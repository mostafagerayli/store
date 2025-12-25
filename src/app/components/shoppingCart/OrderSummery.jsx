// components/OrderSummary.jsx
"use client";

export default function OrderSummary({ totalQuantity, totalPrice, onClearCart }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 h-fit">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Order Summary</h2>
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
          <span className="text-green-600">{totalPrice.toLocaleString()} Toman</span>
        </div>
      </div>

      <button className="mt-6 w-full rounded-lg bg-green-600 py-3 text-white font-semibold hover:bg-green-700 transition">
        Checkout
      </button>

      <button onClick={onClearCart} className="mt-3 w-full text-sm text-red-500 hover:underline">
        Clear Cart
      </button>
    </div>
  );
}
