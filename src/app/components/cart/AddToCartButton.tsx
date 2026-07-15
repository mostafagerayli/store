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
}



export default function AddToCartButton({
  product,
  quantity,
  selectedWeight,
  totalPrice,
}: Props) {


  const dispatch = useAppDispatch();



  const handleAddToCart = () => {

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

        price: totalPrice,

      })
    );

console.log('lk',dispatch);


    toast.success(
      "محصول به سبد خرید اضافه شد"
    );

  };



  return (

    <button
      onClick={handleAddToCart}
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
      "
    >

      <FaShoppingCart size={16} />

      افزودن به سبد خرید

    </button>

  );
}