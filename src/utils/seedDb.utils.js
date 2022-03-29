const { Dishes, Restaurants, Menus } = require('../../models');

const seedDB = async (restaurantsData, dishesData, menusData) => {
  if (await Restaurants.count() === 0) await Restaurants.bulkCreate(restaurantsData);
  // Restaurants.destroy({ truncate: true, cascade: true });

  if (await Dishes.count() === 0) await Dishes.bulkCreate(dishesData);
  // Dishes.destroy({ truncate: true, cascade: true });

  if (await Menus.count() === 0) await Menus.bulkCreate(menusData);
  // Menus.destroy({ truncate: true, cascade: true });
};
module.exports = {
  seedDB,
};
