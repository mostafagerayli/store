import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({
  title,
  description,
  price,
  oldPrice,
  badge,
  image,
}) {
  return (
    <div className="flex flex-col rounded-xl bg-[#0f2b10] p-3 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl min-w-[240px] md:min-w-[260px]">
      
      {/* تصویر و Badge */}
      <div className="relative mb-4 aspect-[1/1] w-full overflow-hidden rounded-lg">
        {badge && (
          <div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            {badge}
          </div>
        )}
        <Image
          src={image}
          alt={title}
          width={300}
          height={375}
          className="h-full w-full object-cover"
        />
      </div>

      {/* عنوان و توضیح */}
      <h3 className="text-white text-lg font-bold">{title}</h3>
      {description && (
        <p className="text-gray-300 text-sm mt-1">{description}</p>
      )}

      {/* قیمت و دکمه */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex flex-col">
          {oldPrice && (
            <span className="text-gray-400 text-sm line-through">
              {oldPrice.toLocaleString()} Toman
            </span>
          )}
          <span className="text-green-400 text-lg font-bold">
            {price?.toLocaleString()} Toman
          </span>
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-black shadow-md transition hover:bg-white hover:text-black">
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}
