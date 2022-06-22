const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const validateToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        throw new Error(JSON.stringify({ status: 401, message: 'Token not found' }));
    }

    try {
        const payload = jwt.verify(token, JWT_SECRET);
        req.user = payload;
        return next();
    } catch (error) {
        throw new Error(JSON.stringify({ status: 401, message: 'Expired or invalid token' }));
    }
};

module.exports = validateToken;
