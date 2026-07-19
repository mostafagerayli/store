"use server";

import { getSetting } from "./getSetting";

export async function getShippingInfo() {
  const shippingPrice = await getSetting(
    "shipping_price"
  );

  const freeShippingThreshold = await getSetting(
    "free_shipping_threshold"
  );


  return {
    shippingPrice: Number(shippingPrice ?? 0),

    freeShippingThreshold: Number(
      freeShippingThreshold ?? 10000000
    ),
  };
}