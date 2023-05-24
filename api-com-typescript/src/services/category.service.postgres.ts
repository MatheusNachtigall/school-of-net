import { Request, Response } from "express";
import { categoryRepository } from "../repositories";

export default class CategoryServicePostgres {
  public create = async (req: Request, res: Response) => {
    const { name, description } = req.body;
    try {
      const newCategory = categoryRepository.create({ name, description });
      console.log(newCategory);

      await categoryRepository.save(newCategory);
      return res
        .status(201)
        .json({ message: `Category '${name}' has been created.` });
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };

  public findAll = async (req: Request, res: Response) => {
    try {
      const categories = await categoryRepository.find();
      res.status(201).json(categories);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };

  public findById = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    try {
      const category = await categoryRepository.findBy({ id: categoryId });

      if (!category) {
        return res.status(404).json({ error: "category not found" });
      }
      res.status(201).json(category);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };

  public update = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    const { name, description } = req.body;

    try {
      let category = await categoryRepository.findBy({ id: categoryId });
      if (!category) {
        return res.status(404).json({ error: "category not found" });
      }

      await categoryRepository.update(categoryId, { name, description });

      category = await categoryRepository.findBy({ id: categoryId });
      if (!category) {
        return res.status(404).json({ error: "category not found" });
      }

      res.status(201).json(category);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };

  public delete = async (req: Request, res: Response) => {
    const categoryId = req.params.id;
    try {
      const category = await categoryRepository.findBy({ id: categoryId });

      if (!category) {
        return res.status(404).json({ error: "category not found" });
      }
      res.status(201).json(category);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };
}
