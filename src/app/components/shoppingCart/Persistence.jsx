"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hydrateCart } from "@/app/store/cart/shoppingCartSlice";

export default function CartPersistence() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      dispatch(hydrateCart(JSON.parse(savedCart)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return null;
}