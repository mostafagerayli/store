"use client";

import { addToCart } from "@/app/store/cart/shoppingCartSlice";
import { useAppDispatch } from "@/app/store/hook";

import { FaShoppingCart } from "react-icons/fa";
import { toast } from "react-toastify";


interface Product {
  id: number;
  name: string;
  image_url?: string | null;
}


interface Props {
  product: Product;
  quantity: number;
  selectedWeight: number;
  totalPrice: number;
  disabled?: boolean;
}


export default function AddToCartButton({
  product,
  quantity,
  selectedWeight,
  totalPrice,
  disabled = false,
}: Props) {

  const dispatch = useAppDispatch();


  const handleAddToCart = () => {

    if (disabled) return;


    if (!product || quantity <= 0) {

      toast.error(
        "لطفاً مقدار معتبر انتخاب کنید"
      );

      return;
    }


    dispatch(
      addToCart({

        id: product.id,

        name: product.name,

        image:
          product.image_url?.trim() ||
          "/placeholder.png",

        quantity,

        selectedWeight,

        // قیمت هر واحد
        price: totalPrice / quantity,

      })
    );


    toast.success(
      "محصول به سبد خرید اضافه شد"
    );

  };


  return (

    <button
      type="button"
      onClick={handleAddToCart}
      disabled={disabled}
      className="
        w-full
        bg-[#02462c]
        text-white
        py-3
        rounded-full
        flex
        items-center
        justify-center
        gap-2
        transition
        hover:bg-[#08452d]
        disabled:cursor-not-allowed
        disabled:bg-gray-400
        disabled:hover:bg-gray-400
      "
    >

      <FaShoppingCart size={16} />

      {disabled
        ? "در حال محاسبه قیمت..."
        : "افزودن به سبد خرید"}

    </button>

  );
}