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
module.exports = {
    addPost,
    getAllPosts,
};