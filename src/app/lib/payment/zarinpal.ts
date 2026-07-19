const ZARINPAL_REQUEST_URL =
  "https://sandbox.zarinpal.com/pg/v4/payment/request.json";


const ZARINPAL_VERIFY_URL =
  "https://sandbox.zarinpal.com/pg/v4/payment/verify.json";


const ZARINPAL_STARTPAY =
  "https://sandbox.zarinpal.com/pg/StartPay/";


interface RequestPaymentParams {
  amount: number;
  description: string;
  callbackUrl: string;
}


interface VerifyPaymentParams {
  amount: number;
  authority: string;
}


// ایجاد درخواست پرداخت
export async function requestPayment({
  amount,
  description,
  callbackUrl,
}: RequestPaymentParams) {


  const response = await fetch(
    ZARINPAL_REQUEST_URL,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        merchant_id:
          process.env.ZARINPAL_MERCHANT_ID,

        amount,

        description,

        callback_url:
          callbackUrl,

      }),
    }
  );


  const data = await response.json();



  if (
    !data.data ||
    data.data.code !== 100
  ) {

    throw new Error(
      data.errors?.message ||
      "خطا در ایجاد پرداخت زرین پال"
    );

  }



  return {

    authority:
      data.data.authority,


    paymentUrl:
      `${ZARINPAL_STARTPAY}${data.data.authority}`,

  };

}





// تایید پرداخت
export async function verifyPayment({
  amount,
  authority,
}: VerifyPaymentParams) {


  const response = await fetch(
    ZARINPAL_VERIFY_URL,
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({

        merchant_id:
          process.env.ZARINPAL_MERCHANT_ID,


        amount,


        authority,

      }),
    }
  );



  const data =
    await response.json();



  if (
    !data.data ||
    ![100, 101].includes(data.data.code)
  ) {

    throw new Error(
      "پرداخت تایید نشد"
    );

  }



  return {

    refId:
      data.data.ref_id,

  };

}