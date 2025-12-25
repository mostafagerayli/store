"use client"

import { addToCart } from "@/app/store/cart/shoppingCartSlice"
import { FaShoppingCart } from "react-icons/fa"
import { useDispatch } from "react-redux"

function AddToCartButton({product}) {
  const dispatch = useDispatch()

  return (
        <button
      onClick={() => dispatch(addToCart(product))}
      className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-black shadow-md transition hover:bg-white"
    >
      <FaShoppingCart />
    </button>
  )
}

export default AddToCartButton