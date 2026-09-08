"use client";

import { useEffect, useRef } from "react";

import {
  hydrateCart,
  updateCartPrices,
} from "@/app/store/cart/shoppingCartSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "@/app/store/hook";

import type { CartState } from "@/types/cart";
import { getCartPrices } from "@/app/lib/getCartPrices";



export default function CartPersistence() {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart);

  const isInitialized = useRef(false);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart === null) {
      isInitialized.current = true;
      return;
    }

    const hydrateAndSync = async (cartString: string) => {
      try {
        const parsedCart: CartState = JSON.parse(cartString);

        // سبد قبلی را وارد Redux کن
        dispatch(hydrateCart(parsedCart));

        // اگر سبد خالی است
        if (parsedCart.items.length === 0) {
          isInitialized.current = true;
          return;
        }

        // گرفتن قیمت‌های جدید از دیتابیس
        const prices = await getCartPrices(
          parsedCart.items.map((item) => ({
            id: item.id,
            selectedWeight: item.selectedWeight,
          })),
        );

        console.log("New prices:", prices);

        // آپدیت قیمت‌ها در Redux
        dispatch(updateCartPrices(prices));

        isInitialized.current = true;
      } catch (error) {
        console.error("Failed to sync cart:", error);

        localStorage.removeItem("cart");

        isInitialized.current = true;
      }
    };

    hydrateAndSync(savedCart);
  }, [dispatch]);

  useEffect(() => {
    if (!isInitialized.current) return;

    localStorage.setItem("cart", JSON.stringify(cart));

    console.log("Cart saved:", cart);
  }, [cart]);

  return null;
}