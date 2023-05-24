import { Request, Response } from "express";
import ProductModel, { IProduct } from "../models/product.model";

export default class ProductsServicePostgres {
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
  public findAll = async (req: Request, res: Response) => {
    // const pool = await this.pool.connect();
    // try {
    //   const query = await pool.query("SELECT * FROM products");
    //   console.log("query: ", query.rows[0]);
    //   res.send(query.rows); // Example: Send the query result as the response
    // } finally {
    //   pool.release();
    // }
  };

  public findById = async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
      const product = await ProductModel.findById(productId);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.json({ product });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };

  // UPDATE - Update a product by ID
  public update = async (req: Request, res: Response) => {
    const productId: String = req.params.id;
    const updatedProduct = req.body as Partial<IProduct>;

    try {
      const product = await ProductModel.findByIdAndUpdate(
        productId,
        updatedProduct,
        { new: true }
      );

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.json({ product });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };

  // DELETE - Delete a product by ID
  public delete = async (req: Request, res: Response) => {
    const productId = req.params.id;

    try {
      const product = await ProductModel.findByIdAndDelete(productId);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      return res.json({ message: "Product deleted successfully" });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };
}
