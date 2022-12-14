const express = require('express');
const cors = require('cors');
const routes = require('../routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(routes);
app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
