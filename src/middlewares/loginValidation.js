const Joi = require('joi');

const logintDTO = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
});
const loginValidation = (req, res, next) => {
    const { error } = logintDTO.validate(req.body, { abortEarly: false });
    if (!error) {
        return next();
    }
    throw new Error(JSON.stringify({ status: 400, message: 'Some required fields are missing' }));
};

module.exports = loginValidation;