import { Request, Response } from "express";
import { categoryRepository } from "../../repositories";

export default class UpdateCategoryService {
  public handle = async (req: Request, res: Response) => {
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
}
