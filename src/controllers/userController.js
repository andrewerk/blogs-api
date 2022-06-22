const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET;

const createUser = async (req, res) => {
    const { email } = await userService.createUser(req.body);
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };

    const token = jwt.sign({ data: email }, secret, jwtConfig);
    res.status(201).json({ token });
};

const getAll = async (req, res) => {
    const users = await userService.getAll();
    res.status(200).json(users);
};

module.exports = {
    createUser,
    getAll,
};