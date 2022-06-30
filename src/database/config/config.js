require('dotenv').config();

const options = {
  host: process.env.HOSTNAME || 'localhost',
  database: process.env.POSTGRES_DB_NAME,
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || '1234',
  dialect: process.env.DB_DIALECT,
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: {
    ...options,
  },
  production: {
    ...options,
  },
  test: {
    ...options,
  },
};
