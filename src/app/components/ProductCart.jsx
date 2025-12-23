"use client"
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/shoppingCartSlice";

export default function ProductCard({
product
}) {
  const dispatch = useDispatch();
  console.log(dispatch);
  return (
    <div className="flex flex-col rounded-xl bg-white p-3 shadow-lg transition-transform hover:-translate-y-1 hover:shadow-2xl min-w-[240px] md:min-w-[260px]">
      
      {/* تصویر و Badge */}
      <div className="relative mb-4 aspect-[1/1] w-full overflow-hidden rounded-lg">
        {product.badge && (
          <div className="absolute right-2 top-2 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            {product.badge}
          </div>
        )}
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={375}
          className="h-full w-full object-cover"
        />
      </div>

      {/* عنوان و توضیح */}
      <h3 className="text-black text-lg font-bold">{product.title}</h3>
      {product.description && (
        <p className="text-gray-800 text-sm mt-1">{product.description}</p>
      )}

      {/* قیمت و دکمه */}
      <div className="mt-2 flex items-center justify-between">
        <div className="flex flex-col">
          {product.oldPrice && (
            <span className="text-gray-400 text-sm line-through">
              {product.oldPrice.toLocaleString()} Toman
            </span>
          )}
          <span className="text-black text-lg font-bold">
            {product.price?.toLocaleString()} Toman
          </span>
        </div>
        <button onClick={() => dispatch(addToCart(product))} className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-black shadow-md transition hover:bg-white hover:text-black">
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}
