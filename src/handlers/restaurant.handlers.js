const services = require('../services/restaurant.services');

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await services.getAllRestaurants();
    res.json(restaurants).status(200);
  } catch (err) {
    res.json({ error: err.message }).status(400);
  }
};

module.exports = {
  getAllRestaurants,
};
