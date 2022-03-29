const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Menus extends Model {
    static associate({ Dishes, Restaurants }) {
      Menus.hasMany(Restaurants, { foreignKey: 'id' });
      Menus.hasMany(Dishes, { foreignKey: 'id' });
    }
  }
  Menus.init({
    restaurantId: {
      type: DataTypes.INTEGER,
      foreignKey: 'restaurantId',
      unique: 'dish_restaurant_combination',
    },
    dishId: {
      type: DataTypes.INTEGER,
      foreignKey: 'dishId',
      unique: 'dish_restaurant_combination',
    },
  }, {
    sequelize,
    modelName: 'Menus',
  });
  return Menus;
};
