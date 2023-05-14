const Meal = require("./../models/mealModel");
const catchAsync = require("./../utils/catchAsync");

const getAllMeals = catchAsync(async (req, res) => {
  const meals = await Meal.find();
  res.json({
    status: "success",
    result: meals.length,
    body: {
      meals,
    },
  });
});

module.exports = {
  getAllMeals,
};
