import { Request, Response } from "express";
import { watcherRepository } from "../../repositories";

export default class UpdateCategoryService {
  public handle = async (req: Request, res: Response) => {
    const watcherId = req.params.id;
    const { name, description } = req.body;

    try {
      let watcher = await watcherRepository.findBy({ id: watcherId });
      if (!watcher) {
        return res.status(404).json({ error: "watcher not found" });
      }

      await watcherRepository.update(watcherId, { name });

      watcher = await watcherRepository.findBy({ id: watcherId });
      if (!watcher) {
        return res.status(404).json({ error: "watcher not found" });
      }

      res.status(201).json(watcher);
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  };
}
