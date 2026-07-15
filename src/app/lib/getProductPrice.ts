"use server";

import { prisma } from "./prisma";
import { calculateProductPrice } from "./utils/product-price";



export async function getProductPrice(
  productId: number,
  weight: number,
  quantity: number = 1
) {
  try {

    const product = await prisma.products.findUnique({
      where: {
        id: productId,
      },
    });


    if (!product) {
      throw new Error("محصول پیدا نشد");
    }


    const totalPrice = calculateProductPrice(
      product.price_per_kg,
      weight,
      quantity
    );


    return {
      success: true,
      price: totalPrice,
    };


  } catch (error) {

    console.error(
      "GET PRODUCT PRICE ERROR:",
      error
    );


    return {
      success: false,
      price: 0,
      message:
        error instanceof Error
          ? error.message
          : "خطا در محاسبه قیمت",
    };

  }
}