const InputError = require('../errors/InputError');
const services = require('../services/restaurant.services');

const getAllRestaurants = async (req, res) => {
  try {
    const restaurants = await services.getAllRestaurants();
    res.json(restaurants).status(200);
  } catch (err) {
    res.status(400).json({ error: err.message });
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
    else res.status(404).json({ message: 'No restaurant found with that Id!' });
  } catch (err) {
    res.status(err.httpCode).json({ error: err.message });
  }
};

const getRestaurantsByDish = async (req, res) => {
  const dishName = req.query.dish;
  try {
    console.log(dishName);
    const restaurants = await services.getRestaurantsByDish(dishName);
    if (restaurants.length > 0)res.json(restaurants).status(200);
    else res.status(400).json({ message: 'No such dish found in any restaurant!' });
  } catch (err) {
    res.status(400).json({ errors: err.message });
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurantDetailsById,
  getRestaurantsByDish,
};
