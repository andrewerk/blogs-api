const categoryService = require('../services/categoryService');

const createCategory = async (req, res) => {
    const category = await categoryService.addCategory(req.body);
    res.status(201).json(category);
};

module.exports = {
    createCategory,
};