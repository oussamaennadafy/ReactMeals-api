const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
});

module.exports = new mongoose.model("Meal", mealSchema);
