const services = require('../services/data.service');

const dataHandler = async (req, res) => {
  try {
    await services.seedData();
    res.json({ message: 'Database Successfully seeded!' }).status(201);
  } catch (err) {
    res.json({ error: err.message }).status(400);
  }
};
module.exports = {
  dataHandler,
};
