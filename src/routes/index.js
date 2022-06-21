const express = require('express');
const logintRoutes = require('./login');

const routes = express.Router();

routes.use('/login', logintRoutes);

module.exports = routes;
