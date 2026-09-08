"use server";

import { prisma } from "@/app/lib/prisma";
import { calculateProductPrice } from "./utils/product-price";

interface CartItemInput {
  id: number;
  selectedWeight: number;
  quantity: number;
  price: number;
}

export async function validateCartPrices(items: CartItemInput[]) {
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

  const updatedItems = items.map((item) => {
    const product = products.find(
      (product) => product.id === item.id,
    );

    if (!product) {
      return null;
    }

    const currentPrice = calculateProductPrice(
      product.price_per_kg,
      item.selectedWeight,
    );

    return {
      id: item.id,
      selectedWeight: item.selectedWeight,
      price: currentPrice,
      changed: currentPrice !== item.price,
    };
  });

  const validItems = updatedItems.filter(
    (
      item,
    ): item is {
      id: number;
      selectedWeight: number;
      price: number;
      changed: boolean;
    } => item !== null,
  );

  return {
    success: true,
    priceChanged: validItems.some((item) => item.changed),
    items: validItems,
  };
}