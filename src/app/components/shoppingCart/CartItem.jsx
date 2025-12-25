// components/CartItem.jsx
"use client";
import Image from "next/image";

export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-xl p-4 shadow-sm">
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
          <p className="font-semibold text-gray-900">{item.title}</p>
          <p className="text-sm text-gray-500 mt-1">
            {item.price.toLocaleString()} Toman
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 border rounded-lg px-3 py-1">
          <button onClick={onDecrease} className="text-lg font-bold text-gray-700 hover:text-black">−</button>
          <span className="font-medium text-gray-900">{item.quantity}</span>
          <button onClick={onIncrease} className="text-lg font-bold text-gray-700 hover:text-black">+</button>
        </div>

        <button onClick={onRemove} className="text-sm text-red-500 hover:underline">Remove</button>
      </div>
    </div>
  );
}
