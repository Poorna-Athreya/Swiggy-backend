const utils = require('../utils/swiggy.utils');

const transformRestaurants = (data) => {
  const restaurants = data.map((eachItem) => ({
    name: eachItem.fullName,
    location: eachItem.Location,
    costForTwo: eachItem.costForTwo,
  }));
  return restaurants;
};
const transformDishes = (data) => {
  const dishes = [];
  data.forEach((eachItem) => {
    eachItem.menu.forEach((eachMenuItem) => {
      dishes.push(eachMenuItem);
    });
  });
  return dishes;
};
const transformMenus = async (data) => {
  let dishes = await utils.getDishes();
  let restaurants = await utils.getRestaurants();
  dishes = dishes.reduce((acc, dish) => {
    acc[dish.name] = dish.id;
    return acc;
  }, {});
  restaurants = restaurants.reduce((acc, restaurant) => {
    acc[restaurant.name] = restaurant.id;
    return acc;
  }, {});
  const menus = [];

  data.forEach((eachItem) => {
    eachItem.menu.forEach((menuItem) => {
      menus.push({
        restaurantId: restaurants[eachItem.fullName],
        dishId: dishes[menuItem.name],
      });
    });
  });
  return menus;
};

module.exports = {
  transformDishes,
  transformMenus,
  transformRestaurants,
};
