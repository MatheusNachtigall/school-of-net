import { Request, Response } from "express";
import ProductModel, { IProduct } from "../models/product.model";

export default class ProductsServiceMongo {
  public create = async (req: Request, res: Response) => {
    const iProduct = req.body as IProduct;
    const product = await ProductModel.create(iProduct);

    return res.json({ product });
  };

  // READ - Find all products
  public findAll = async (req: Request, res: Response) => {
    try {
      const products: Array<IProduct> = await ProductModel.find({});
      return res.json({ products });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
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
