import { Request, Response } from "express";
import { videoRepository, watcherRepository } from "../../repositories";

export default class CreateCategoryService {
  public handle = async (req: Request, res: Response) => {
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
}
