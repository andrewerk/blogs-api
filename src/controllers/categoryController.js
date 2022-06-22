const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    const category = await categoryService.addCategory(req.body);
    res.status(201).json(category);
};
const getCategories = async (req, res) => {
    const categories = await categoryService.getCategories();
    res.status(200).json(categories);
};
module.exports = {
    createCategory,
    getCategories,
};