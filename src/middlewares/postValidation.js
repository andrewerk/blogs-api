const Joi = require('joi');

const addPostDTO = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
});
const updatePostDTO = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
});

const addPostValidation = (req, res, next) => {
    let validationToUse = null;
    if (req.method === 'POST') validationToUse = addPostDTO;
    else validationToUse = updatePostDTO;
    const { error } = validationToUse.validate(req.body, { abortEarly: false });
    if (!error) return next();
    throw new Error(JSON.stringify({ status: 400, message: 'Some required fields are missing' }));
};

module.exports = addPostValidation;