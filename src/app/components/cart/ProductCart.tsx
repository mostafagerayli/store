"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/store/cart/shoppingCartSlice";
import { toast } from "react-toastify";

interface Product {
  id: number;
  slug: string;
  name: string;
  image_url?: string;
  description?: string;
  price_per_kg: number;
  badge?: string;
  currency?: string;
}

interface Props {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className = "" }: Props) {
  const router = useRouter();
  const dispatch = useDispatch();

  const {
    name,
    image_url,
    badge,
    description,
    price_per_kg,
    currency = "تومان",
  } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image_url?.trim() || "/placeholder.png",
        quantity: 1,
        selectedWeight: 1000,
        price: price_per_kg,
      }),
    );

    toast.success("محصول به سبد خرید اضافه شد");
  };

return (
  <div
    className={`group cursor-pointer overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-green-700 hover:shadow-xl ${className}`}
    onClick={() => router.push(`/products/${product.slug}`)}
  >
    {/* Image */}
    <div className="relative aspect-[4/3] overflow-hidden bg-[#f8f8f8]">
      {badge && (
        <span className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-2 py-1 text-[10px] font-bold text-white shadow md:right-3 md:top-3 md:px-3 md:text-xs">
          {badge}
        </span>
      )}

      {image_url ? (
        <Image
          src={image_url}
          alt={name}
          fill
          sizes="(max-width:768px) 50vw, (max-width:1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="flex h-full items-center justify-center bg-gray-100 text-xs text-gray-400">
          بدون تصویر
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-3 md:p-4 lg:p-5">
      <h3 className="line-clamp-2 min-h-[42px] text-center text-sm font-bold text-[#011c12] md:min-h-[48px] md:text-base lg:text-lg">
        {name}
      </h3>

      <div className="mt-2 flex justify-center">
        <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] font-bold text-[#0b5b3c] md:text-xs">
          ۱ کیلوگرم
        </span>
      </div>

      {description && (
        <p className="mt-3 line-clamp-2 text-center text-[11px] leading-5 text-gray-500 md:text-sm md:leading-6">
          {description}
        </p>
      )}

      <div className="mt-4 text-center">
        <p className="text-base font-black text-[#c69b2c] md:text-lg lg:text-xl">
          {Number(price_per_kg).toLocaleString()}
        </p>

        <span className="text-xs text-gray-500">{currency}</span>
      </div>

      <button
        onClick={handleAddToCart}
        className="mt-4 flex h-9 w-full items-center justify-center gap-2 rounded-full bg-[#02462c] text-xs font-bold text-white transition-all duration-300 hover:bg-[#0A5A39] md:mt-5 md:h-11 md:text-sm"
      >
        <FaShoppingCart size={14} />
        افزودن به سبد خرید
      </button>
    </div>
  </div>
);
}
