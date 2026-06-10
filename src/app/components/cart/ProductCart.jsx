import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({ product, className = "" }) {
  const {
    name,
    image_url,
    badge,
    description,
    price,
    weight,
    currency = "تومان",
  } = product;

  return (
    <div
      className={
        "overflow-hidden rounded-[24px] bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 " +
        className
      }
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        {badge && (
          <div className="absolute top-3 right-3 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            {badge}
          </div>
        )}

        {image_url ? (
          <Image
            src={image_url}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100 text-gray-400">
            بدون تصویر
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="font-bold text-[#011c12] text-lg">{name}</h3>
          <p className="text-sm text-gray-500 mt-1">
            {weight >= 1000
              ? `${weight / 1000} کیلوگرم`
              : `${weight} گرم`}
          </p>
        {description && (
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {description}
          </p>
        )}

        <div className="mt-3">

          <p className="text-[#c69b2c] text-lg font-bold">
            {Number(price)?.toLocaleString()} {currency}
          </p>
        </div>

        <div className="mt-4">
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}
