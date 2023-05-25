import { Request, Response } from "express";
import { videoRepository } from "../../repositories";

export default class ReadCategoryService {
  public findAll = async (req: Request, res: Response) => {
    try {
      const categories = await videoRepository.find({
        relations: {
          categories: true,
        },
      });
      res.status(201).json(categories);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };

  public findById = async (req: Request, res: Response) => {
    const videoId = req.params.id;
    try {
      const video = await videoRepository.findBy({ id: videoId });

      if (!video) {
        return res.status(404).json({ error: "video not found" });
      }
      res.status(201).json(video);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };
}
