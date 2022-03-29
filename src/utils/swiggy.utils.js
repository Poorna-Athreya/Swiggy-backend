const { Dishes, Restaurants } = require('../../models');

const getDishes = async () => Dishes.findAll({ attributes: ['id', 'name'] });
const getRestaurants = async () => Restaurants.findAll({ attributes: ['id', 'name'] });

module.exports = {
  getDishes,
  getRestaurants,
};
