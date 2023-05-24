import { AppDataSource } from "../data-source";
import { Watcher } from "../entities";

export const watcherRepository = AppDataSource.getRepository(Watcher);
