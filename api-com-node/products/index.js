var express = require("express");
var router = express.Router();

router.get("/:id?", require("./services/read.js"));
router.put("/:id", require("./services/update.js"));
router.delete("/:id", require("./services/delete.js"));
router.post("/", require("./services/create.js"));

module.exports = router;
