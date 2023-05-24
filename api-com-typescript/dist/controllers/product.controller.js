"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import ProductsServiceMongo from "../services/product.service";
const product_service_postgress_1 = __importDefault(require("../services/product.service.postgress"));
class ProductController {
    constructor() {
        this.router = express_1.default.Router();
        this.path = "/products";
        // this.productService = new ProductsServiceMongo();
        this.productService = new product_service_postgress_1.default();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get(`${this.path}/:id`, this.productService.findById);
        this.router.get(`${this.path}`, this.productService.findAll);
        // this.router.post(`${this.path}`, this.productService.create);
        this.router.put(`${this.path}/:id`, this.productService.update);
        this.router.delete(`${this.path}/:id`, this.productService.delete);
    }
}
exports.default = ProductController;
