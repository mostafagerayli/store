"use server";

import { prisma } from "@/app/lib/prisma";
import { requestPayment } from "../payment/zarinpal";


export async function createPayment(
  orderId: string
) {

  try {

    const order =
      await prisma.orders.findUnique({

        where: {
          id: BigInt(orderId),
        },

      });



    if (!order) {

      return {
        success: false,
        message: "سفارش پیدا نشد",
      };

    }



    if(order.payment_status === "paid"){

      return {
        success:false,
        message:"این سفارش قبلاً پرداخت شده است",
      };

    }



    const payment =
      await requestPayment({

        amount:
          order.final_price,


        description:
          `پرداخت سفارش شماره ${order.id}`,


        callbackUrl:
          process.env.ZARINPAL_CALLBACK_URL!,

      });



    await prisma.orders.update({

      where:{
        id:order.id,
      },


      data:{
        authority:
          payment.authority,
      },

    });



    return {

      success:true,

      url:
        payment.paymentUrl,

    };



  } catch(error){

    console.log(
      "CREATE PAYMENT ERROR:",
      error
    );


    return {

      success:false,

      message:
        "خطا در ایجاد پرداخت",

    };

  }

}