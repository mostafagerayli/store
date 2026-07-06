"use client";

import { useEffect } from "react";

import {
  hydrateCart,
} from "@/app/store/cart/shoppingCartSlice";

import {
  useAppDispatch,
  useAppSelector,
} from "@/app/store/hook";

import type { CartState } from "@/types/cart";

export default function CartPersistence() {
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (!savedCart) return;

    try {
      const parsedCart: CartState = JSON.parse(savedCart);

      dispatch(hydrateCart(parsedCart));
    } catch (error) {
      console.error("Failed to parse cart:", error);
      localStorage.removeItem("cart");
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return null;
}