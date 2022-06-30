require('dotenv').config();

const options = {
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.MYSQL_PORT || '3306',
  database: process.env.MYSQL_DB_NAME,
  username: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
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
