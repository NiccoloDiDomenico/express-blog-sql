const express = require("express");
const router = express.Router();
const tagsControllers = require("../controllers/tagsControllers");

// index/tags
router.get("/", tagsControllers.index);

module.exports = router;