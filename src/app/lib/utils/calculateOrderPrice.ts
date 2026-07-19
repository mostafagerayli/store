import { getSetting } from "../getSetting";
import { prisma } from "../prisma";
import {calculateProductPrice} from "./product-price"

interface OrderProduct {
  id: number;
  quantity: number;
  selectedWeight: number;
}


export async function calculateOrderPrice(
  products: OrderProduct[]
) {

  const dbProducts = await prisma.products.findMany({
    where: {
      id: {
        in: products.map((item) => item.id),
      },
    },
  });


  let totalPrice = 0;


  for (const item of products) {

    const product = dbProducts.find(
      (product) => product.id === item.id
    );


    if (!product) {
      throw new Error("محصول پیدا نشد");
    }


    const productPrice =
      calculateProductPrice(
        product.price_per_kg,
        item.selectedWeight,
        item.quantity
      );


    totalPrice += productPrice;
  }



  const shippingSetting = await getSetting(
    "shipping_price"
  );


  const freeShippingThreshold = await getSetting(
    "free_shipping_threshold"
  );


    const shippingPrice =
    totalPrice >= 10000000
      ? 0
      : 200000;


  return {
    totalPrice: Math.round(totalPrice),

    shippingPrice,

    finalPrice:
      Math.round(totalPrice) + shippingPrice,
  };
}