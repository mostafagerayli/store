"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import AddToCartButton from "../../cart/AddToCartButton";
import { ProductDetailItem } from "@/types/product";

interface ProductDetailProps {
  product: ProductDetailItem;
}

const WEIGHTS = [250, 500, 1000] as const;

function formatWeight(weight: number) {
  return weight >= 1000
    ? `${weight / 1000} کیلوگرم`
    : `${weight} گرم`;
}

export default function ProductDetail({
  product,
}: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] =
    useState<(typeof WEIGHTS)[number]>(500);

  const totalPrice = useMemo(() => {
    return (
      (Number(product.price) * selectedWeight * quantity) /
      1000
    );
  }, [product.price, quantity, selectedWeight]);

  return (
    <div className="mx-auto mt-5 mb-5 max-w-6xl rounded-2xl bg-white px-4 py-10 shadow-2xl">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* اطلاعات محصول */}
        <div className="flex flex-col gap-5 text-right">
          <h1 className="text-3xl font-bold text-gray-900">
            {product.name}
          </h1>

          {product.description && (
            <p className="text-sm leading-7 text-gray-600">
              {product.description}
            </p>
          )}

          {/* قیمت هر کیلو */}
          <div>
            <p className="text-sm text-gray-500">
              قیمت هر کیلو
            </p>

            <p className="text-xl font-bold text-green-700">
              {Number(product.price).toLocaleString()} تومان
            </p>
          </div>

          {/* انتخاب وزن */}
          <div>
            <p className="mb-2 text-sm text-gray-500">
              انتخاب وزن
            </p>

            <div className="flex flex-wrap gap-2">
              {WEIGHTS.map((weight) => (
                <button
                  key={weight}
                  type="button"
                  onClick={() =>
                    setSelectedWeight(weight)
                  }
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    selectedWeight === weight
                      ? "border-green-800 bg-green-800 text-white"
                      : "bg-white text-gray-700"
                  }`}
                >
                  {formatWeight(weight)}
                </button>
              ))}
            </div>
          </div>

          {/* تعداد */}
          <div className="mt-2 flex items-center gap-3">
            <p className="text-sm text-gray-500">
              تعداد بسته
            </p>

            <div className="flex items-center overflow-hidden rounded-full border">
              <button
                type="button"
                onClick={() =>
                  setQuantity((q) =>
                    Math.max(1, q - 1)
                  )
                }
                className="bg-gray-100 px-3 py-1"
              >
                −
              </button>

              <span className="px-4">
                {quantity}
              </span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((q) =>
                    Math.min(product.stock, q + 1)
                  )
                }
                disabled={quantity >= product.stock}
                className="bg-gray-100 px-3 py-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                +
              </button>
            </div>

            <span className="text-sm text-gray-400">
              موجودی: {product.stock}
            </span>
          </div>

          {/* قیمت نهایی */}
          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-sm text-gray-500">
              قیمت نهایی
            </p>

            <p className="text-2xl font-bold text-green-700">
              {totalPrice.toLocaleString()} تومان
            </p>
          </div>

          {/* افزودن به سبد خرید */}
          {product.stock > 0 ? (
            <AddToCartButton
              product={product}
              quantity={quantity}
              selectedWeight={selectedWeight}
              totalPrice={totalPrice}
            />
          ) : (
            <button
              disabled
              className="w-full cursor-not-allowed rounded-full bg-gray-300 py-3 text-gray-600"
            >
              ناموجود
            </button>
          )}
        </div>

        {/* تصویر */}
        <div className="relative h-[420px] w-full overflow-hidden rounded-3xl bg-white shadow-xl">
          <Image
            src={
              product.image_url ??
              "/placeholder.png"
            }
            alt={product.name}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}