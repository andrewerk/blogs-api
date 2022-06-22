const express = require('express');
require('express-async-errors');

const userController = require('../controllers/userController');

const middlewares = require('../middlewares');

const userRoutes = express.Router();

userRoutes.use(express.json());

userRoutes.post('/', middlewares.createUserValidation, userController.createUser);
userRoutes.get('/', middlewares.validateToken, userController.getAll);

module.exports = userRoutes;
