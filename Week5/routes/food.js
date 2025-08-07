const express = require("express");
const router = express.Router();
// importing the controller
const Controller = require("../controllers");

router.get("/", Controller.foodController.getAllFood);
module.exports = router;
