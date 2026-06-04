"use client";

import { addToCart } from "@/app/store/cart/shoppingCartSlice";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";

function AddToCartButton({ product }) {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(addToCart(product))}
      className="w-full bg-[#02462c] text-white py-3 rounded-full flex items-center justify-center gap-2 transition hover:bg-[#08452d]"
    >
      <FaShoppingCart size={16} />
      افزودن به سبد خرید
    </button>
  );
}

export default AddToCartButton;