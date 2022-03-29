const utils = require('../utils/swiggy.utils');

const getAllRestaurants = async () => utils.getRestaurants();

module.exports = {
  getAllRestaurants,
};
