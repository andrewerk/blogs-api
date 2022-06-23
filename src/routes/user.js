const express = require('express');
require('express-async-errors');

const userController = require('../controllers/userController');

const middlewares = require('../middlewares');

const userRoutes = express.Router();

userRoutes.use(express.json());

userRoutes.post('/', middlewares.createUserValidation, userController.createUser);
userRoutes.get('/:id', middlewares.validateToken, userController.getById);
userRoutes.get('/', middlewares.validateToken, userController.getAll);
userRoutes.delete('/me', middlewares.validateToken, userController.deleteUser);

module.exports = userRoutes;
