import App from "./app.config";
import * as bodyParser from "body-parser";
import morgan from "morgan";
import simpleLogMiddleware from "./middlewares/log.middleware";
import {
  CategoryController,
  VideoController,
  ProductController,
  WatcherController,
} from "./controllers";

const app = new App({
  port: 3000,
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    morgan("dev"),
    simpleLogMiddleware,
  ],
  controllers: [
    new ProductController(),
    new VideoController(),
    new CategoryController(),
    new WatcherController(),
  ],
});

app.listen();
