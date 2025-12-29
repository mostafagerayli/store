import Image from "next/image";
import AddToCartButton from "./AddToCartButton";

export default function ProductCard({
  product,
  className = "",
}) {
  const {
    title,
    image,
    badge,
    description,
    oldPrice,
    price,
    currency = "Toman",
  } = product;

  return (
    <div
      className={
        "flex flex-col rounded-xl bg-white dark:bg-green-900 p-3 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl min-w-[240px] md:min-w-[260px] " +
        className
      }
    >
      {/* Image & Badge */}
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

      {/* Title & Description */}
      <h3 className="text-black dark:text-white text-lg font-bold">{title}</h3>
      {description && (
        <p className="text-gray-800 dark:text-gray-300 text-sm mt-1">{description}</p>
      )}

      {/* Price & Button */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex flex-col">
          {oldPrice && (
            <span className="text-gray-400 dark:text-gray-500 text-sm line-through">
              {oldPrice.toLocaleString()} {currency}
            </span>
          )}
          <span className="text-black dark:text-white text-lg font-bold">
            {price?.toLocaleString()} {currency}
          </span>
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
