const { Dishes, Restaurants } = require('../../models');

const getDishes = async () => Dishes.findAll({ attributes: ['id', 'name'] });
const getRestaurants = async () => Restaurants.findAll({
  attributes: { exclude: ['createdAt', 'updatedAt'] },
});
const getRestaurantById = async (restaurantId) => Restaurants.findOne({
  attributes: ['id'],
  where: { id: restaurantId },
  include: {
    model: Dishes,
    through: { attributes: [] },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
});
const getRestaurantsByDish = async (dishName) => Dishes.findAll({
  attributes: ['id'],
  where: { name: dishName },
  include: {
    model: Restaurants,
    through: { attributes: [] },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
  },
});

module.exports = {
  getDishes,
  getRestaurants,
  getRestaurantById,
  getRestaurantsByDish,
};
