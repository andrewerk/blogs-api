const Sequelize = require('sequelize');
const config = require('../database/config/config');
const { Category, User, BlogPost, PostCategory } = require('../database/models');

const addPost = async (email, postToAdd) => {
    const { title, content, categoryIds } = postToAdd;
    const dbCategories = await Category
        .findAll({ where: { id: { [Sequelize.Op.in]: categoryIds } } });
    if (dbCategories.length !== categoryIds.length) {
        throw new Error(JSON.stringify({ status: 400, message: '"categoryIds" not found' }));
    }
    const { id: userId } = await User.findOne({ where: { email } });
    const sequelize = new Sequelize(config.development);
    const postAdded = sequelize.transaction(async (t) => {
        const post = await BlogPost.create({
            title, content, userId,
        }, { transaction: t });
        await Promise.all(categoryIds.map(async (category) => {
          await PostCategory.create({ postId: post.id, categoryId: category }, { transaction: t });
        }));
        return post;
    });
    return postAdded;
};

module.exports = {
    addPost,
};