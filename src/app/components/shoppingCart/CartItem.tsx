"use client";

import Image from "next/image";
import type { CartItem as CartItemType } from "@/types/cart";

interface CartItemProps {
  item: CartItemType;
  onIncrease: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export default function CartItem({
  item,
  onIncrease,
  onDecrease,
  onRemove,
}: CartItemProps) {
  const price = Number(item.price ?? 0);

  const imageSrc =
    item.image.trim() !== ""
      ? item.image
      : "/placeholder.png";

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-white p-4 shadow-sm">
      <div className="flex w-full items-center gap-4">
        <div className="relative h-20 w-20">
          <Image
            src={imageSrc}
            alt={item.name}
            fill
            sizes="80px"
            className="rounded-lg border object-cover"
          />
        </div>

        <div className="flex-1">
          <p className="font-semibold text-gray-900">{item.name}</p>

          <p className="mt-1 text-sm text-gray-500">
            {price.toLocaleString()} تومان
          </p>

          <p className="mt-1 text-xs text-gray-400">
            {item.selectedWeight >= 1000
              ? `${item.selectedWeight / 1000} کیلوگرم`
              : `${item.selectedWeight} گرم`}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 rounded-lg border px-3 py-1">
          <button
            onClick={onDecrease}
            className="text-lg font-bold text-gray-700 hover:text-black"
          >
            −
          </button>

          <span className="font-medium text-gray-900">
            {item.quantity}
          </span>

          <button
            onClick={onIncrease}
            className="text-lg font-bold text-gray-700 hover:text-black"
          >
            +
          </button>
        </div>

        <button
          onClick={onRemove}
          className="text-red-500 hover:underline"
        >
          حذف
        </button>
      </div>
    </div>
  );
}