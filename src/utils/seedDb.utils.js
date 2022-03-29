const { Dishes, Restaurants, Menus } = require('../../models');

const seedDB = async (restaurantsData, dishesData, menusData) => {
  if (await Restaurants.count() > 0) Restaurants.destroy({ truncate: true, cascade: true });
  await Restaurants.bulkCreate(restaurantsData);

  if (await Dishes.count() > 0) Dishes.destroy({ truncate: true, cascade: true });
  await Dishes.bulkCreate(dishesData);

  if (await Menus.count() > 0) Menus.destroy({ truncate: true, cascade: true });
  await Menus.bulkCreate(menusData);
};
module.exports = {
  seedDB,
};
