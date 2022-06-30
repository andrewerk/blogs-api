const express = require('express');
const swaggerUi = require('swagger-ui-express');
const routes = require('./routes');
const middlewares = require('./middlewares');
require('express-async-errors');

const app = express();

app.use(express.json());
app.use('/', swaggerUi.serve, swaggerUi.setup(require('../swagger.json')));

app.use('', routes);
app.use(middlewares.errorHandler);

// ...
// É importante exportar a constante `app`,

// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
