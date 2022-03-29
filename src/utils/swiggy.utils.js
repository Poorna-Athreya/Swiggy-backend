const { Dishes, Restaurants } = require('../../models');

const getDishes = async () => Dishes.findAll({ attributes: ['id', 'name'] });
const getRestaurants = async () => Restaurants.findAll();

module.exports = {
  getDishes,
  getRestaurants,
};
