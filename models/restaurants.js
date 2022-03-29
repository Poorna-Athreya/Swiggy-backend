const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Restaurants extends Model {
    static associate({ Dishes, Menus }) {
      Restaurants.belongsToMany(Dishes, { through: Menus, foreignKey: 'restaurantId', sourceKey: 'id' });
    }
  }
  Restaurants.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    costForTwo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Restaurants',
  });
  return Restaurants;
};
