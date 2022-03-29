const InputError = require('../errors/InputError');
const services = require('../services/restaurant.services');

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await services.getAllRestaurants();
    res.json(restaurants).status(200);
  } catch (err) {
    res.json({ error: err.message }).status(400);
  }
};

const getRestaurantDetailsById = async (req, res) => {
  let restaurantId = req.params.id;
  try {
    if (!restaurantId) throw new InputError('BadRequest', 'Invalid restauarnt Id!', 400);
    restaurantId = parseInt(restaurantId, 10);
    if (typeof restaurantId !== 'number') throw new InputError('BadRequest', 'Invalid, restaurant Id must be a valid integer!', 400);
    const restaurantDetails = await services.getRestaurantDetailsById(restaurantId);
    if (restaurantDetails) res.json(restaurantDetails).status(200);
    else res.json({ message: 'No restaurant found with that Id!' }).status(404);
  } catch (err) {
    res.json({ error: err.message }).status(err.httpCode);
  }
};
module.exports = {
  getAllRestaurants,
  getRestaurantDetailsById,
};
