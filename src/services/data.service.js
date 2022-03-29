const utils = require('../utils/seedDb.utils');
const swiggyData = require('../../swiggy-data.json');
const transformations = require('./transformations.services');
const validators = require('./dataValidator');

const seedData = async () => {
  validators.validateSwiggyData(swiggyData);
  const restaurantsData = transformations.transformRestaurants(swiggyData);
  const dishesData = transformations.transformDishes(swiggyData);
  const menusData = await transformations.transformMenus(swiggyData);
  const result = await utils.seedDB(restaurantsData, dishesData, menusData);
  return result;
};

seedData();

module.exports = {
  seedData,
};
