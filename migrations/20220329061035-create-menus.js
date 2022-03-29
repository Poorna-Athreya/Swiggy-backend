module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Menus', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      restaurantId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Restaurants',
          key: 'id',
        },
        onDelete: 'cascade',
        unique: 'dish_restaurant_combination',
      },
      dishId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Dishes',
          key: 'id',
        },
        onDelete: 'cascade',
        unique: 'dish_restaurant_combination',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }, {
      uniqueKeys: {
        dish_restaurant_combination: {
          fields: ['dishId', 'restaurantId'],
        },
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Menus');
  },
};
