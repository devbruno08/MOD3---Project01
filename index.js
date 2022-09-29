const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/character.route');
const mongoConnect = require('./src/database/MongoDB/mongo');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require("./src/docs/swagger.json");

const port = 3000;
const app = express();


app.use(express.json());
app.use(cors());

mongoConnect();


app.use('/characters', routes);
app.use('/api/docs', swaggerUi.serve);
app.use('/api/docs', swaggerUi.setup(swaggerDoc));


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
