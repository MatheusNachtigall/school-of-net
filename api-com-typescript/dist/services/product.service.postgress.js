"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = __importDefault(require("../models/product.model"));
class ProductsServicePostgress {
    constructor() {
        // public create = async (req: Request, res: Response) => {
        //   const { name, price, quantity, date } = req.body;
        //   try {
        //     const query = "INSERT INTO products (name, price, quantity, date) VALUES ($1, $2, $3, $4) RETURNING *";
        //     const values = [name, price, quantity, date];
        //     const result = await pool.query(query, values);
        //     const product = result.rows[0];
        //     return res.json({ product });
        //   } catch (error) {
        //     return res.status(500).json({ error: "Server error" });
        //   }
        // };
        // READ - Find all products
        this.findAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            // const pool = await this.pool.connect();
            // try {
            //   const query = await pool.query("SELECT * FROM products");
            //   console.log("query: ", query.rows[0]);
            //   res.send(query.rows); // Example: Send the query result as the response
            // } finally {
            //   pool.release();
            // }
        });
        this.findById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.id;
            try {
                const product = yield product_model_1.default.findById(productId);
                if (!product) {
                    return res.status(404).json({ error: "Product not found" });
                }
                return res.json({ product });
            }
            catch (error) {
                return res.status(500).json({ error: "Server error" });
            }
        });
        // UPDATE - Update a product by ID
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.id;
            const updatedProduct = req.body;
            try {
                const product = yield product_model_1.default.findByIdAndUpdate(productId, updatedProduct, { new: true });
                if (!product) {
                    return res.status(404).json({ error: "Product not found" });
                }
                return res.json({ product });
            }
            catch (error) {
                return res.status(500).json({ error: "Server error" });
            }
        });
        // DELETE - Delete a product by ID
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const productId = req.params.id;
            try {
                const product = yield product_model_1.default.findByIdAndDelete(productId);
                if (!product) {
                    return res.status(404).json({ error: "Product not found" });
                }
                return res.json({ message: "Product deleted successfully" });
            }
            catch (error) {
                return res.status(500).json({ error: "Server error" });
            }
        });
    }
}
exports.default = ProductsServicePostgress;
