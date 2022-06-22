const { Category } = require('../database/models');

const addCategory = async ({ name }) => {
    const category = await Category.create({ name });
    return category;
};

module.exports = {
    addCategory,
};
