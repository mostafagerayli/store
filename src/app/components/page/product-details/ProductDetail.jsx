"use client";

import Image from "next/image";
import { useState } from "react";
import AddToCartButton from "../../cart/AddToCartButton";

export default function ProductDetail({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState(500);

  const weights = [250, 500, 1000];

  const totalPrice = ((product.price * selectedWeight) / 1000) * quantity;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 shadow-2xl mt-5 mb-5 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* INFO */}
        <div className="flex flex-col gap-5 text-right">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>

          <p className="text-gray-600 leading-7 text-sm">
            {product.description}
          </p>

          {/* Price per KG */}
          <div>
            <p className="text-sm text-gray-500">قیمت هر کیلو:</p>

            <p className="text-xl font-bold text-green-700">
              {Number(product.price)?.toLocaleString()} تومان
            </p>
          </div>

          {/* Weight */}
          <div>
            <p className="text-sm text-gray-500 mb-2">انتخاب وزن</p>

            <div className="flex gap-2 flex-wrap">
              {weights.map((weight) => (
                <button
                  key={weight}
                  onClick={() => setSelectedWeight(weight)}
                  className={`px-4 py-2 rounded-full border transition text-sm ${
                    selectedWeight === weight
                      ? "bg-green-800 text-white border-green-800"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {weight >= 1000 ? `${weight / 1000}kg` : `${weight}g`}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="flex items-center gap-3 mt-2">
            <p className="text-sm text-gray-500">تعداد بسته</p>

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

          {/* Total Price */}
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-500">قیمت نهایی</p>

            <p className="text-2xl font-bold text-green-700">
              {totalPrice.toLocaleString()} تومان
            </p>
          </div>

          {/* Add To Cart */}
          <AddToCartButton
            product={product}
            quantity={quantity}
            selectedWeight={selectedWeight}
            totalPrice={totalPrice}
          />
        </div>

        {/* IMAGE */}
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
