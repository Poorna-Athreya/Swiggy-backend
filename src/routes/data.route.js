const express = require('express');
const { dataHandler } = require('../handlers/data.handler');

const DataRoute = express.Router();

DataRoute.post('/', dataHandler);

module.exports = {
  DataRoute,
};
