"use client";

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
  return (
    <div className="h-fit rounded-xl bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-lg font-bold text-gray-900">
        خلاصه سفارش
      </h2>

      <div className="space-y-4 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>آیتم</span>
          <span>{totalQuantity}</span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>جمع قیمت</span>
          <span>{totalPrice.toLocaleString()} تومان</span>
        </div>

        <div className="flex justify-between border-t pt-4 font-semibold text-gray-900">
          <span>قیمت نهایی</span>
          <span className="text-green-600">
            {totalPrice.toLocaleString()} تومان
          </span>
        </div>
      </div>

      <button
        className="mt-6 w-full rounded-lg bg-[#02462c] py-3 font-semibold text-white transition hover:bg-green-700"
      >
        پرداخت
      </button>

      <button
        onClick={onClearCart}
        className="mt-3 w-full text-sm text-red-500 hover:underline"
      >
        حذف سبد
      </button>
    </div>
  );
}