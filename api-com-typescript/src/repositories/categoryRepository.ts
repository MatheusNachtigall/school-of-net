import { AppDataSource } from "../data-source";
import { Category } from "../entities";

export const categoryRepository = AppDataSource.getRepository(Category);
