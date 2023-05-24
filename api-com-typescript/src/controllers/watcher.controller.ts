import { Router } from "express";
import { WatcherServicePostgres } from "../services";

export default class WatcherController {
  public router = Router();
  public path = "/watchers";
  private watcherService: WatcherServicePostgres;

  constructor() {
    this.watcherService = new WatcherServicePostgres();
    this.setupRoutes();
  }

  public setupRoutes() {
    this.router.get(`${this.path}/:id`, this.watcherService.findById);
    this.router.get(`${this.path}`, this.watcherService.findAll);
    this.router.post(`${this.path}`, this.watcherService.create);
    this.router.put(`${this.path}/:id`, this.watcherService.update);
    this.router.delete(`${this.path}/:id`, this.watcherService.delete);
  }
}
