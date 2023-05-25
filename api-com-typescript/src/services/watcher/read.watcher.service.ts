import { Request, Response } from "express";
import { watcherRepository } from "../../repositories";

export default class ReadCategoryService {
  public findAll = async (req: Request, res: Response) => {
    try {
      const videos = await watcherRepository.find({
        relations: {
          videos: true,
        },
      });
      res.status(201).json(videos);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };

  public findById = async (req: Request, res: Response) => {
    const watcherId = req.params.id;
    try {
      const watcher = await watcherRepository.findBy({ id: watcherId });

      if (!watcher) {
        return res.status(404).json({ error: "watcher not found" });
      }
      res.status(201).json(watcher);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };
}
