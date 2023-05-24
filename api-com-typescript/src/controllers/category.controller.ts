import { Router } from "express";
import { CategoryServicePostgres } from "../services";

export default class CategoryController {
  public router = Router();
  public path = "/categories";
  private categoryService: CategoryServicePostgres;

  constructor() {
    this.categoryService = new CategoryServicePostgres();
    this.setupRoutes();
  }

  public setupRoutes() {
    this.router.get(`${this.path}/:id`, this.categoryService.findById);
    this.router.get(`${this.path}`, this.categoryService.findAll);
    this.router.post(`${this.path}`, this.categoryService.create);
    this.router.put(`${this.path}/:id`, this.categoryService.update);
    this.router.delete(`${this.path}/:id`, this.categoryService.delete);
  }
}
