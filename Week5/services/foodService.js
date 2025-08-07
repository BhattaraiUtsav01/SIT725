const foodItems = [
  { id: 1, name: "Pizza", price: "$12" },
  { id: 2, name: "Burger", price: "$10" },
];
const getAllFood = () => {
  return foodItems;
};
module.exports = { getAllFood };
