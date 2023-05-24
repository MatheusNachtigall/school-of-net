import { Request, Response } from "express";
import { watcherRepository, videoRepository } from "../repositories";

export default class WatcherServicePostgres {
  public create = async (req: Request, res: Response) => {
    const { name, video_id } = req.body;
    try {
      const video = await videoRepository.findOneBy({ id: video_id });
      if (!video) {
        return res.status(404).json({
          error: "Video not found",
        });
      }

      const newWatcher = watcherRepository.create({
        name,
        videos: [video],
      });

      await watcherRepository.save(newWatcher);
      return res.status(201).json({
        message: `Watcher '${name}' has been created.`,
        watcher: newWatcher,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({ error: "Server error" });
    }
  };

  // READ - Find all videos
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

  public update = async (req: Request, res: Response) => {
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

  // // DELETE - Delete a watcher by ID
  public delete = async (req: Request, res: Response) => {
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
