const express = require('express');
require('express-async-errors');
const middlewares = require('../middlewares');

const postController = require('../controllers/postController');

const postRoutes = express.Router();

postRoutes.use(express.json());

postRoutes.post('/', middlewares.addPostValidation, postController.addPost);
postRoutes.get('/:id', postController.getPostById);
postRoutes.get('/', postController.getAllPosts);

module.exports = postRoutes;
