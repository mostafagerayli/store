"use server";

import { prisma } from "@/app/lib/prisma";
import { calculateProductPrice } from "./utils/product-price";

interface CartItemInput {
  id: number;
  selectedWeight: number;
}

export async function getCartPrices(items: CartItemInput[]) {
  const products = await prisma.products.findMany({
    where: {
      id: {
        in: items.map((item) => item.id),
      },
    },
    select: {
      id: true,
      price_per_kg: true,
    },
  });

  return items
    .map((item) => {
      const product = products.find(
        (product) => product.id === item.id
      );

      if (!product) return null;

      return {
        id: item.id,
        selectedWeight: item.selectedWeight,
        price: calculateProductPrice(
          product.price_per_kg,
          item.selectedWeight
        ),
      };
    })
    .filter(
      (
        item
      ): item is {
        id: number;
        selectedWeight: number;
        price: number;
      } => item !== null
    );
}