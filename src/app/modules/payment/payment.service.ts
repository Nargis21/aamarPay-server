import { join } from "path";
import orderModel from "../order/order.model";
import { verifyPayment } from "./payment.utils";
import { readFileSync } from "fs";

const confirmationService = async (transactionId: string, status: string) => {
  const verifyResponse = await verifyPayment(transactionId);
  let result;
  let message;

  if (verifyResponse && verifyResponse.pay_status === "Successful") {
    result = await orderModel.findOneAndUpdate(
      { transactionId },
      { paymentStatus: "Paid" }
    );
    message = "Payment Successful!😎";
  } else {
    message = "Payment Failed!😪";
  }

  const filePath = join(__dirname, "../../../views/confirmation.html");
  let template = readFileSync(filePath, "utf-8");
  template = template.replace("{{message}}", message);

  return template;
};

export const paymentService = { confirmationService };
