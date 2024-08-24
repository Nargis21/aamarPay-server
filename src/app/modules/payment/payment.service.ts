import { join } from "path";
import orderModel from "../order/order.model";
import { verifyPayment } from "./payment.utils";
import { readFileSync } from "fs";

const confirmationService = async (transactionId: string) => {
  const verifyResponse = await verifyPayment(transactionId);
  let message;

  if (verifyResponse && verifyResponse.pay_status === "Successful") {
    await orderModel.findOneAndUpdate(
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
