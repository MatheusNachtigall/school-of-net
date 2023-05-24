"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: `${(_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : ""}.env` });
const { Client, Pool } = require("pg");
const data_source_1 = require("./data-source");
class App {
    constructor(appConfig) {
        this.setPostgresConnection();
        this.app = (0, express_1.default)();
        this.port = appConfig.port;
        // this.setMongooseConnection();
        this.setMiddlewares(appConfig.middlewares);
        this.setControllers(appConfig.controllers);
    }
    setMiddlewares(middlewares) {
        middlewares.forEach((mid) => this.app.use(mid));
    }
    setControllers(controllers) {
        controllers.forEach((controller) => this.app.use("/", controller.router));
    }
    setMongooseConnection() {
        var mongoDB = mongoose_1.default
            .connect("mongodb://localhost:27017/ecommerce")
            .then(function () {
            console.log("mongoDB connected");
        })
            .catch(function (err) {
            console.log("mongoDB error: " + err.message);
        });
    }
    setPostgresConnection() {
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
        data_source_1.AppDataSource.initialize().then(() => {
            console.log("Postgres connected...");
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Express has started...");
        });
    }
}
exports.default = App;
