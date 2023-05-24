import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config({ path: `${process.env.NODE_ENV ?? ""}.env` });

import { DataSource } from "typeorm";
import { join } from "path";
import { Video, Watcher, Category } from "./entities";

const port = process.env.POSTGRES_PORT as number | undefined;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: port,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
  // synchronize: false,
  // entities: [`${__dirname}/**/entities/*.{ts,js}`],
  // entities: [join(__dirname, "**", "*.entity.{ts,js}")],
  entities: [Category, Video, Watcher],
});
