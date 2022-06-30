require('dotenv').config();

const options = {
  host: process.env.HOSTNAME || 'postgres',
  port: process.env.POSTGRES_PORT || '5432',
  database: process.env.POSTGRES_DB_NAME || 'BlogsApi',
  username: process.env.POSTGRES_USER || 'root',
  password: process.env.POSTGRES_PASSWORD || 'root',
  dialect: process.env.DB_DIALECT,
  logging: process.env.DEBUG !== 'false',
  dialectOptions: {
    ssl: true,
},
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
