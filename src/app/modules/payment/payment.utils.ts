import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const initiatePayment = async (paymentData: any) => {
  try {
    const response = await axios.post(process.env.PAYMENT_URL!, {
      store_id: process.env.STORE_ID,
      signature_key: process.env.SIGNATURE_KEY,
      tran_id: paymentData.transactionId,
      success_url: `http://localhost:3000/api/v1/payment/confirmation?transactionId=${paymentData.transactionId}&status=success`,
      fail_url: `http://localhost:3000/api/v1/payment/confirmation`,
      cancel_url: "http://localhost:5173/",
      amount: paymentData.totalPrice,
      currency: "BDT",
      desc: "Merchant Registration Payment",
      cus_name: paymentData.customer_name,
      cus_email: paymentData.customer_email,
      cus_add1: paymentData.customer_address,
      cus_add2: "N/A",
      cus_city: "N/A",
      cus_state: "N/A",
      cus_postcode: "N/A",
      cus_country: "N/A",
      cus_phone: paymentData.customer_phone,
      type: "json",
    });
    return response.data;
  } catch (err) {
    throw new Error("Payment initiation failed!😫");
  }
};

export const verifyPayment = async (transactionId: string) => {
  try {
    const response = await axios.get(process.env.PAYMENT_VERIFY_URL!, {
      params: {
        store_id: process.env.STORE_ID,
        signature_key: process.env.SIGNATURE_KEY,
        type: "json",
        request_id: transactionId,
      },
    });

    return response.data;
  } catch (err) {
    throw new Error("Payment verification failed!😫");
  }
};
