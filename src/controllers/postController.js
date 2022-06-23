const postService = require('../services/postService');

const addPost = async (req, res) => {
    const { data: email } = req.user;
    const postAdded = await postService.addPost(email, req.body);
    res.status(201).json(postAdded);
};

const getAllPosts = async (_req, res) => {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const post = await postService.getPostById(id);
    res.status(200).json(post);
};

const editPost = async (req, res) => {
    const { data: email } = req.user;
    const { id } = req.params;
    const post = await postService.editPost(id, req.body, email);
    res.status(200).json(post);
};

const deletetPost = async (req, res) => {
    const { data: email } = req.user;
    const { id } = req.params;
    await postService.deletePost(id, email);
    res.status(204).end();
};

module.exports = {
    addPost,
    getAllPosts,
    getPostById,
    editPost,
    deletetPost,
};