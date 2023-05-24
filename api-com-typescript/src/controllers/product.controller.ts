import express from "express";
// import ProductsServiceMongo from "../services/product.service";
import { ProductsServicePostgres } from "../services";

export default class ProductController {
  public router = express.Router();
  public path = "/products";
  // private productService: ProductsServiceMongo;
  private productService: ProductsServicePostgres;

  constructor() {
    // this.productService = new ProductsServiceMongo();
    this.productService = new ProductsServicePostgres();
    this.setupRoutes();
  }

  public setupRoutes() {
    this.router.get(`${this.path}/:id`, this.productService.findById);
    this.router.get(`${this.path}`, this.productService.findAll);
    // this.router.post(`${this.path}`, this.productService.create);
    this.router.put(`${this.path}/:id`, this.productService.update);
    this.router.delete(`${this.path}/:id`, this.productService.delete);
  }
}
