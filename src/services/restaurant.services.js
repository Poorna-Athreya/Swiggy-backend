const utils = require('../utils/swiggy.utils');

const getAllRestaurants = async () => utils.getRestaurants();
const getRestaurantDetailsById = async (id) => utils.getRestaurantById(id);
const getRestaurantsByDish = async (dish) => utils.getRestaurantsByDish(dish);

module.exports = {
  getAllRestaurants,
  getRestaurantDetailsById,
  getRestaurantsByDish,
};
