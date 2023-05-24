import App from "./app.config";
import * as bodyParser from "body-parser";
import { simpleRedirectMiddleware } from "./middlewares";
import { MainController } from "./controllers";

const app = new App({
  port: 3001,
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: false }),
    simpleRedirectMiddleware,
  ],
  controllers: [new MainController()],
});

app.listen();
