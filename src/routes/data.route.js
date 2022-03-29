const express = require('express');
const { dataHandler } = require('../handlers/data.handler');

const dataRoute = express.Router();

dataRoute.post('/', dataHandler);

module.exports = {
  dataRoute,
};
