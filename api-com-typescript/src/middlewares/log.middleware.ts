import { Request, Response } from "express";

const simpleLogMiddleware = (req: Request, res: Response, next: any) => {
  console.log("My simpleLogMiddleware");
  next();
};

export default simpleLogMiddleware;
