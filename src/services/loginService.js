const { User } = require('../database/models');

const login = async ({ email, password }) => {
    const user = await User.findOne({ where: { email, password } });
    if (!user) {
        throw new Error(JSON.stringify({ status: 400, message: 'Invalid fields' }));
    }
    return user;
};

module.exports = {
    login,
};
