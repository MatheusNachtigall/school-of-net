import { Request, Response } from "express";
import { videoRepository, categoryRepository } from "../../repositories";

export default class CreateCategoryService {
  public handle = async (req: Request, res: Response) => {
    const { name, description, duration, category_id } = req.body;
    try {
      const category = await categoryRepository.findOneBy({ id: category_id });
      if (!category) {
        return res.status(404).json({
          error: "Category not found",
        });
      }

      const newVideo = videoRepository.create({
        name,
        description,
        category_id,
        duration,
        categories: category,
      });

      await videoRepository.save(newVideo);
      return res.status(201).json({
        message: `Video '${name}' has been created.`,
        video: newVideo,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ error: "Server error" });
    }
  };
}
