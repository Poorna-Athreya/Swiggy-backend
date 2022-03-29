const { Dishes, Restaurants } = require('../../models');

const getDishes = async () => Dishes.findAll({ attributes: ['id', 'name'] });
const getRestaurants = async () => Restaurants.findAll();
const getRestaurantById = async (restaurantId) => Restaurants.findOne({
  where: { id: restaurantId },
});

module.exports = {
  getDishes,
  getRestaurants,
  getRestaurantById,
};
