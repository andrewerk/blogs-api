const postService = require('../services/postService');

const addPost = async (req, res) => {
    const { data: email } = req.user;
    const postAdded = await postService.addPost(email, req.body);
    res.status(201).json(postAdded);
};

module.exports = {
    addPost,
};