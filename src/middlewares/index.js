const errorHandler = require('./errorHandler');
const loginValidation = require('./loginValidation');
const createUserValidation = require('./createUserValidation');
const validateToken = require('./auth');

module.exports = {
  errorHandler,
  loginValidation,
  createUserValidation,
  validateToken,
};
