const foodService = require("../services/foodService");
exports.getAllFood = (req, res) => {
  const items = foodService.getAllFood();

  res.json({ message: "Welcome to my Resturant", data: items });
};
