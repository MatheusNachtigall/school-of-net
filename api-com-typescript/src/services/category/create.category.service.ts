import { Request, Response } from "express";
import { categoryRepository } from "../../repositories";

export default class CreateCategoryService {
  public handle = async (req: Request, res: Response) => {
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
}
