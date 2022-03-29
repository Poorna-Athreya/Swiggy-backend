const utils = require('../utils/swiggy.utils');

const getAllRestaurants = async () => utils.getRestaurants();
const getRestaurantDetailsById = async (id) => utils.getRestaurantById(id);

module.exports = {
  getAllRestaurants,
  getRestaurantDetailsById,
};
