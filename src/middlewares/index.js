const errorHandler = require('./errorHandler');
const loginValidation = require('./loginValidation');
const createUserValidation = require('./createUserValidation');
const validateToken = require('./auth');
const addCategoryValidation = require('./addCategory');
const postValidation = require('./postValidation');

module.exports = {
  errorHandler,
  loginValidation,
  createUserValidation,
  validateToken,
  addCategoryValidation,
  postValidation,
};
