"use server";

import { prisma } from "@/app/lib/prisma";
import { CreateOrderSchema } from "@/validations/order.validation";
import { calculateOrderPrice } from "../utils/calculateOrderPrice";
interface OrderProduct {
  id: number;
  quantity: number;
  selectedWeight: number;
}

export async function createOrder(formData: FormData) {
  try {
    const productsString = formData.get("products")?.toString();

    if (!productsString) {
      return {
        success: false,
        message: "محصولات سفارش ارسال نشده است",
      };
    }

    let products;

    try {
      products = JSON.parse(productsString);
    } catch {
      return {
        success: false,
        message: "فرمت محصولات اشتباه است",
      };
    }

    const data = {
      full_name: formData.get("full_name")?.toString() ?? "",

      phone: formData.get("phone")?.toString() ?? "",

      province: formData.get("province")?.toString() ?? "",

      city: formData.get("city")?.toString() ?? "",

      address: formData.get("address")?.toString() ?? "",

      postal_code: formData.get("postal_code")?.toString() || null,

      description: formData.get("description")?.toString() || null,

      products,
    };

    const validation = CreateOrderSchema.safeParse(data);

    if (!validation.success) {
      console.log(validation.error.flatten());

      return {
        success: false,
        message: JSON.stringify(validation.error.flatten()),
      };
    }

    const orderData = validation.data;

    const price = await calculateOrderPrice(orderData.products);

    const order = await prisma.orders.create({
      data: {
        full_name: orderData.full_name,

        phone: orderData.phone,

        province: orderData.province,

        city: orderData.city,

        address: orderData.address,

        postal_code: orderData.postal_code,

        products: orderData.products,

        total_price: price.totalPrice,

        shipping_price: price.shippingPrice,

        final_price: price.finalPrice,

        description: orderData.description,

        payment_method: "online",

        payment_status: "pending",

        status: "pending",
      },
    });

    return {
      success: true,

      message: "سفارش با موفقیت ثبت شد",

      orderId: order.id.toString(),
    };
  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);

    return {
      success: false,

      message: "خطا در ثبت سفارش",
    };
  }
}





export async function decreaseProductStock(
  products: OrderProduct[]
) {

  await prisma.$transaction(async (tx) => {


    for (const item of products) {


      const gram =
        item.selectedWeight * item.quantity;



      const product =
        await tx.products.findUnique({

          where: {
            id: item.id,
          },

        });



      if (!product) {
        throw new Error(
          "محصول پیدا نشد"
        );
      }



      if (
        product.stock_gram < gram
      ) {

        throw new Error(
          `موجودی محصول ${product.name} کافی نیست`
        );

      }



      await tx.products.update({

        where: {
          id: item.id,
        },


        data: {

          stock_gram:
            product.stock_gram - gram,

        },

      });


    }


  });

}