const express = require('express');
require('express-async-errors');

const loginController = require('../controllers/loginController');

const middlewares = require('../middlewares');

const loginRoutes = express.Router();

loginRoutes.use(express.json());

loginRoutes.post('/', middlewares.loginValidation, loginController.login);

module.exports = loginRoutes;
