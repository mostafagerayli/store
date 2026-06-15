"use client";

import Image from "next/image";
import { useState } from "react";
import AddToCartButton from "../../cart/AddToCartButton";

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("500g");
console.log(product);

  const weights = ["250g", "500g", "1kg"];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 bg- shadow-2xl mt-5 mb-5 rounded-lg">
      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* RIGHT - INFO */}
        <div className="flex flex-col gap-5 text-right">
          {/* TITLE */}
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          {/* SHORT DESC */}
          <p className="text-gray-600 leading-7 text-sm">
            {product.description}
          </p>

          {/* PRICE */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-green-700">
              {product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">تومان</span>
          </div>

          {/* WEIGHT */}
          <div>
            <p className="text-sm text-gray-500 mb-2">انتخاب وزن</p>

            <div className="flex gap-2">
              {weights.map((w) => (
                <button
                  key={w}
                  onClick={() => setSelectedWeight(w)}
                  className={`px-4 py-2 rounded-full border transition text-sm ${
                    selectedWeight === w
                      ? "bg-green-800 text-white border-green-800"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* QUANTITY */}
          <div className="flex items-center gap-3 mt-2">
            <p className="text-sm text-gray-500">تعداد</p>

            <div className="flex items-center border rounded-full overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-3 py-1 bg-gray-100"
              >
                -
              </button>

              <span className="px-4">{quantity}</span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-3 py-1 bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* ADD TO CART */}
          <AddToCartButton product={product} />
        </div>
        {/* LEFT - IMAGE */}
        <div className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-xl bg-white">
          <Image
            src={product.image_url || "/placeholder.png"}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
