const { User } = require('../database/models');

const createUser = async (body) => {
    const { email } = body;
    const userExist = await User.findOne({ where: { email } });
    if (userExist) {
        throw new Error(JSON.stringify({ status: 409, message: 'User already registered' }));
    }
    const user = await User.create(body);
    if (!user) {
        throw new Error(JSON.stringify({ status: 400, message: 'Invalid fields' }));
    }
    return user;
};

const getAll = async () => {
    const users = await User.findAll({
        attributes: { exclude: ['password'] },
    });
    return users;
};

module.exports = {
    createUser,
    getAll,
};
