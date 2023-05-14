const express = require("express");
const router = express.Router();
const { getAllMeals } = require("./../controllers/mealsController");

router.route("/").get(getAllMeals);

module.exports = router;
