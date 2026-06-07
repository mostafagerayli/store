// components/CartItem.jsx
"use client";
import Image from "next/image";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const price = Number(item.price || 0);
  const imageSrc =
  item.image && item.image.trim() !== ""
    ? item.image
    : "/placeholder.png";    
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-center gap-4 w-full">
        <div className="relative w-20 h-20">
          <Image
            src={imageSrc}
            alt={item.name || "product image"}
            fill
            className="object-cover rounded-lg border"
            sizes="80px"
          />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-gray-900">{item.name}</p>
          <p className="text-sm text-gray-500 mt-1">
            {price.toLocaleString()} تومان
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 border rounded-lg px-3 py-1">
          <button
            onClick={onDecrease}
            className="text-lg font-bold text-gray-700 hover:text-black"
          >
            −
          </button>
          <span className="font-medium text-gray-900">{item.quantity}</span>
          <button
            onClick={onIncrease}
            className="text-lg font-bold text-gray-700 hover:text-black"
          >
            +
          </button>
        </div>

        <button
          onClick={onRemove}
          className="text-sm text-red-500 hover:underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
