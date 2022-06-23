const Joi = require('joi');

const postDTO = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
});
const addPostValidation = (req, res, next) => {
    const { error } = postDTO.validate(req.body, { abortEarly: false });
    if (!error) return next();
    throw new Error(JSON.stringify({ status: 400, message: 'Some required fields are missing' }));
};

module.exports = addPostValidation;