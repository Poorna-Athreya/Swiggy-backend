const express = require('express');
const handlers = require('../handlers/restaurant.handlers');

const router = express.Router();
router.get('/', handlers.getAllRestaurants);
router.get('/:id', handlers.getRestaurantDetailsById);

module.exports = {
  getRestaurantsRoute: router,
};
