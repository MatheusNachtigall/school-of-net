import { Request, Response } from "express";

export const simpleRedirectMiddleware = (
  req: Request,
  res: Response,
  next: any
) => {
  if (req.path === "/" && req.method === "GET") {
    console.log("Accessing main route with GET method");
  } else {
    console.log("Route not implemented yet...go back to main route");
    return res.redirect("/");
  }
  next();
};
