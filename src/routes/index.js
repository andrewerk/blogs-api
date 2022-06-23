const express = require('express');
const logintRoutes = require('./login');
const userRoutes = require('./user');
const categoryRoutes = require('./category');
const postRoutes = require('./post');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.use('/login', logintRoutes);
routes.use('/user', userRoutes);
routes.use('/categories', middlewares.validateToken, categoryRoutes);
routes.use('/post', middlewares.validateToken, postRoutes);

module.exports = routes;
