import { Request, Response } from "express";
import { paymentService } from "./payment.service";

const confirmationController = async (req: Request, res: Response) => {
  const { transactionId } = req.query;

  const result = await paymentService.confirmationService(
    transactionId as string
  );
  res.send(result);
};

export const paymentController = {
  confirmationController,
};
