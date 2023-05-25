import { Router } from "express";
import {
  CreateCategoryService,
  DeleteCategoryService,
  ReadCategoryService,
  UpdateCategoryService,
} from "../services";

export default class WatcherController {
  public router = Router();
  public path = "/watchers";

  constructor() {
    this.setupRoutes();
  }

  public setupRoutes() {
    this.router.get(`${this.path}/:id`, new ReadCategoryService().findAll);
    this.router.get(`${this.path}`, new ReadCategoryService().findById);
    this.router.post(`${this.path}`, new CreateCategoryService().handle);
    this.router.put(`${this.path}/:id`, new UpdateCategoryService().handle);
    this.router.delete(`${this.path}/:id`, new DeleteCategoryService().handle);
  }
}
