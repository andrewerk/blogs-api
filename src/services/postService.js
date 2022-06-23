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

const getAllPosts = async () => {
    const posts = await BlogPost.findAll({
        include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
        ],
    });
    return posts;
};

const getPostById = async (id) => {
    const post = await BlogPost.findByPk(id, {
        include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
        ],
    });
    if (!post) {
        throw new Error(JSON.stringify({ status: 404, message: 'Post does not exist' }));
    }
    return post;
};

const editPost = async (id, { title, content }, userEmail) => {
    const post = await BlogPost.findByPk(id, { include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
        ],
    });
    if (!post) {
        throw new Error(JSON.stringify({ status: 404, message: 'Post does not exist' }));
    }
    const { email } = post.user;
    if (email !== userEmail) {
        throw new Error(JSON.stringify({ status: 401, message: 'Unauthorized user' }));
    } 
    await post.update({
        title,
        content,
    });
    await post.save();
    return post;
};

const deletePost = async (id, userEmail) => {
    const post = await BlogPost.findByPk(id, { include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        ],
    });
    if (!post) {
        throw new Error(JSON.stringify({ status: 404, message: 'Post does not exist' }));
    }
    const { email } = post.user;
    if (email !== userEmail) {
        throw new Error(JSON.stringify({ status: 401, message: 'Unauthorized user' }));
    } 
    await BlogPost.destroy({ where: { id } });
};

const searchPost = async (searchTerm) => {
    const term = `%${searchTerm}%`;
    const posts = await BlogPost.findAll({
        where: {
            [Sequelize.Op.or]: [
                { title: { [Sequelize.Op.like]: term } },
                { content: { [Sequelize.Op.like]: term } },
            ],
        },
        include: [
            { model: User, as: 'user', attributes: { exclude: ['password'] } },
            { model: Category, as: 'categories' },
            ],
    });
    return posts;
};

module.exports = {
    addPost,
    getAllPosts,
    getPostById,
    editPost,
    deletePost,
    searchPost,
};