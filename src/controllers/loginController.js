const jwt = require('jsonwebtoken');
const loginService = require('../services/loginService');

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
    const { email } = await loginService.login(req.body);
    const jwtConfig = {
        expiresIn: '7d',
        algorithm: 'HS256',
      };
    const token = jwt.sign({ data: email }, secret, jwtConfig);
    res.status(200).json({ token });
};

module.exports = {
    login,
};