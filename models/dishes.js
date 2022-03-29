const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Dishes extends Model {
    static associate({ Restaurants, Menus }) {
      Dishes.belongsToMany(Restaurants, { through: Menus, foreignKey: 'dishId', sourceKey: 'id' });
    }
  }
  Dishes.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    rating: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Dishes',
  });
  return Dishes;
};
