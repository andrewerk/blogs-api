const express = require('express');
const logintRoutes = require('./login');
const userRoutes = require('./user');

const routes = express.Router();

routes.use('/login', logintRoutes);
routes.use('/user', userRoutes);

module.exports = routes;
