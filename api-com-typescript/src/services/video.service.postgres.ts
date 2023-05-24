import { Request, Response } from "express";
import { videoRepository, categoryRepository } from "../repositories";

export default class VideoServicePostgres {
  public create = async (req: Request, res: Response) => {
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

  // READ - Find all categories
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

  // UPDATE - Update a video by ID
  public update = async (req: Request, res: Response) => {
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

  // // DELETE - Delete a video by ID
  public delete = async (req: Request, res: Response) => {
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
