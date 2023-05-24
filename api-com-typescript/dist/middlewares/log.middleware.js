"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const simpleLogMiddleware = (req, res, next) => {
    console.log("My simpleLogMiddleware");
    next();
};
exports.default = simpleLogMiddleware;
