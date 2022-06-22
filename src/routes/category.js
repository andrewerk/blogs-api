const express = require('express');
require('express-async-errors');
const middlewares = require('../middlewares');

const categoryController = require('../controllers/categoryController');

const categoryRoutes = express.Router();

categoryRoutes.use(express.json());

categoryRoutes.post('/', middlewares.addCategoryValidation, categoryController.createCategory);

module.exports = categoryRoutes;
