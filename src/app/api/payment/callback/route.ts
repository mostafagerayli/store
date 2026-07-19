import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/app/lib/prisma";

import { verifyPayment } from "@/app/lib/payment/zarinpal";


export async function GET(
  request: NextRequest
) {

  try {


    const { searchParams } =
      new URL(request.url);



    const authority =
      searchParams.get("Authority");


    const status =
      searchParams.get("Status");



    if(
      status !== "OK" ||
      !authority
    ){

      return NextResponse.redirect(
        new URL(
          "/payment/failed",
          request.url
        )
      );

    }



    const order =
      await prisma.orders.findFirst({

        where:{
          authority,
        }

      });



    if(!order){

      return NextResponse.redirect(
        new URL(
          "/payment/failed",
          request.url
        )
      );

    }



    const payment =
      await verifyPayment({

        amount:
          order.final_price,


        authority,

      });



const products =
  order.products as {
    id: number;
    quantity: number;
    selectedWeight: number;
  }[];



await prisma.$transaction(async (tx) => {


  await tx.orders.update({

    where:{
      id: order.id,
    },


    data:{

      payment_status:
        "paid",

      status:
        "completed",

      ref_id:
        payment.refId,

    },

  });



  for (const item of products) {


    const gram =
      item.selectedWeight *
      item.quantity;



    const product =
      await tx.products.findUnique({

        where:{
          id:item.id,
        },

      });



    if(!product){

      throw new Error(
        "محصول پیدا نشد"
      );

    }



    if(product.stock_gram < gram){

      throw new Error(
        "موجودی کافی نیست"
      );

    }



    await tx.products.update({

      where:{
        id:item.id,
      },


      data:{

        stock_gram:
          product.stock_gram - gram,

      },

    });


  }


});



    return NextResponse.redirect(

      new URL(
        `/payment/success?orderId=${order.id}`,
        request.url
      )

    );



  } catch(error){


    console.log(
      "PAYMENT VERIFY ERROR",
      error
    );


    return NextResponse.redirect(

      new URL(
        "/payment/failed",
        request.url
      )

    );

  }

}