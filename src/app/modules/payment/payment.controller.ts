import { Request, Response } from "express";

const confirmationController = (req: Request, res: Response) => {
  res.send(`<h1>Payment Success</h1>`);
};

export const paymentController = {
  confirmationController,
};
