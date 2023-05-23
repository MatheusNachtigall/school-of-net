var express = require("express");
var http = require("http");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");
var cors = require("cors");

var app = express();
var server = http.createServer(app);

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoDB = mongoose
  .connect("mongodb://localhost:27017/ecommerce")
  .then(function () {
    console.log("mongoDB connected");
  })
  .catch(function (err) {
    console.log("mongoDB error: " + err.message);
  });

var whiteList = ["http://localhost:3000", "https://google.com"];

// //cors
// app.use(
//   cors({
//     origin: function (origin, cb) {
//       console.log("origin: " + origin);
//       let index = whiteList.index(origin);
//       if (index === -1) {
//         cb(new Error("Not allowed by CORS"));
//       } else {
//         cb(null, origin);
//       }
//     },
//     methods: ["POST", "PUT", "GET"],
//   })
// );

// //   mongoDB.on("connected", function (connection) {
// //     console.log("MongoDB connected");
// //   });
// //   mongoDB.on("Error", function (connection) {
// //     console.log("MongoDB Error");
// //   });
require("./routes")(app);

server.listen(3000, function () {
  console.log("Server started");
});
