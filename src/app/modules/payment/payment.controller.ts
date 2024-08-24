import { Request, Response } from "express";
import { paymentService } from "./payment.service";

const confirmationController = (req: Request, res: Response) => {
  const { transactionId } = req.query;

  res.send(`<h1>Payment Success</h1>`);
  const result = paymentService.confirmationService(transactionId as string);
};

export const paymentController = {
  confirmationController,
};
