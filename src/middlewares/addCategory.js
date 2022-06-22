const addCategoryValidation = (req, _res, next) => {
    const { name } = req.body;
    if (!name) {
        throw new Error(JSON.stringify({ status: 400, message: '"name" is required' }));
    }
    next();
};

module.exports = addCategoryValidation;