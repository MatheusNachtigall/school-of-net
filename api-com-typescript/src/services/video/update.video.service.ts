import { Request, Response } from "express";
import { videoRepository } from "../../repositories";

export default class UpdateCategoryService {
  public handle = async (req: Request, res: Response) => {
    const videoId = req.params.id;
    const { name, description } = req.body;

    try {
      let video = await videoRepository.findBy({ id: videoId });
      if (!video) {
        return res.status(404).json({ error: "video not found" });
      }

      await videoRepository.update(videoId, { name, description });

      video = await videoRepository.findBy({ id: videoId });
      if (!video) {
        return res.status(404).json({ error: "video not found" });
      }

      res.status(201).json(video);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };
}
