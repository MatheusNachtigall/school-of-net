import "reflect-metadata";
import express, { Application } from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config({ path: `${process.env.NODE_ENV ?? ""}.env` });
const { Client, Pool } = require("pg");
import { AppDataSource } from "./data-source";

export default class App {
  public app: Application;
  public port: number;

  constructor(appConfig: { port: number; middlewares: any; controllers: any }) {
    this.setPostgresConnection();
    this.app = express();
    this.port = appConfig.port;
    // this.setMongooseConnection();
    this.setMiddlewares(appConfig.middlewares);
    this.setControllers(appConfig.controllers);
  }

  private setMiddlewares(middlewares: {
    forEach: (mid: (middleware: any) => void) => void;
  }) {
    middlewares.forEach((mid) => this.app.use(mid));
  }

  private setControllers(controllers: {
    forEach: (con: (controller: any) => void) => void;
  }) {
    controllers.forEach((controller) => this.app.use("/", controller.router));
  }

  private setMongooseConnection() {
    var mongoDB = mongoose
      .connect("mongodb://localhost:27017/ecommerce")
      .then(function () {
        console.log("mongoDB connected");
      })
      .catch(function (err) {
        console.log("mongoDB error: " + err.message);
      });
  }

  private setPostgresConnection() {
    // const postgressCredentials = {
    //   user: process.env.POSTGRES_USER,
    //   host: process.env.POSTGRES_HOST,
    //   database: process.env.POSTGRES_DATABASE,
    //   password: process.env.POSTGRES_PASSWORD,
    //   port: process.env.POSTGRES_PORT,
    // };
    // const client = new Client(postgressCredentials);
    // client.connect(async function (err: any) {
    //   if (err) throw err;
    //   console.log("Connected!");
    //   let query = await client.query("Select * from products").then();
    //   console.log("query: ", query.rows[0]);
    // });

    AppDataSource.initialize().then(() => {
      console.log("Postgres connected...");
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log("Express has started...");
    });
  }
}
