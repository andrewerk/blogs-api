const errorHandler = require('./errorHandler');
const loginValidation = require('./loginValidation');
const createUserValidation = require('./createUserValidation');
const validateToken = require('./auth');
const addCategoryValidation = require('./addCategory');
const addPostValidation = require('./postValidation');

module.exports = {
  errorHandler,
  loginValidation,
  createUserValidation,
  validateToken,
  addCategoryValidation,
  addPostValidation,
};
