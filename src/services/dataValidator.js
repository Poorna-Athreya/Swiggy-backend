const InputError = require('../errors/InputError');

const validateSwiggyData = (data) => {
  if (data.constructor !== Array) throw new InputError('BadRequest', 'Invalid input format, must be an array!', 400);
  else if (data.every((item) => item.constructor !== Object)) throw new InputError('BadRequest', 'Invalid input format, must be an array of objects!', 400);
};

module.exports = {
  validateSwiggyData,
};
