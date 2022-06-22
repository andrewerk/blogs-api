const Joi = require('joi');

const userDTO = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
}).messages({
    'any.required': '{{#label}} is required',
    'string.min': '{{#label}} length must be at least {{#limit}} characters long',
    'string.email': '{{#label}} must be a valid email',
});
const createUserValidation = (req, res, next) => {
    const { displayName, email, password } = req.body;
    const { error } = userDTO.validate({ displayName, email, password }, { abortEarly: false });
    if (!error) return next();
    const messages = error.details.map((e) => e.message);
    throw new Error(JSON.stringify({ status: 400, message: messages[0] }));
};

module.exports = createUserValidation;