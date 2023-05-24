"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: `${(_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : ""}.env` });
const typeorm_1 = require("typeorm");
const path_1 = require("path");
const port = process.env.POSTGRES_PORT;
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: port,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    // entities: [`${__dirname}/**/entities/*.{ts,js}`],
    entities: [(0, path_1.join)(__dirname, "**", "*.entity.{ts,js}")],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    synchronize: false,
});
