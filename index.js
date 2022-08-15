const express = require('express');
const cors = require('cors');
const routes = require('./src/routes/character.route');
const mongoConnect = require('./src/database/MongoDB/mongo');
const mongoose = require('mongoose');

const port = 3000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/characters', routes);

mongoConnect();

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
