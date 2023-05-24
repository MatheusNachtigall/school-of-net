import { Router } from "express";
import { VideoServicePostgres } from "../services";

export default class VideoController {
  public router = Router();
  public path = "/videos";
  private videoService: VideoServicePostgres;

  constructor() {
    this.videoService = new VideoServicePostgres();
    this.setupRoutes();
  }

  public setupRoutes() {
    this.router.get(`${this.path}/:id`, this.videoService.findById);
    this.router.get(`${this.path}`, this.videoService.findAll);
    this.router.post(`${this.path}`, this.videoService.create);
    this.router.put(`${this.path}/:id`, this.videoService.update);
    this.router.delete(`${this.path}/:id`, this.videoService.delete);
  }
}
