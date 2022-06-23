const express = require('express');
require('express-async-errors');
const middlewares = require('../middlewares');

const postController = require('../controllers/postController');

const postRoutes = express.Router();

postRoutes.use(express.json());

postRoutes.post('/', middlewares.postValidation, postController.addPost);
postRoutes.get('/search', postController.searchPost);
postRoutes.get('/:id', postController.getPostById);
postRoutes.put('/:id', middlewares.postValidation, postController.editPost);
postRoutes.delete('/:id', postController.deletetPost);
postRoutes.get('/', postController.getAllPosts);

module.exports = postRoutes;
