const path = require('path');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const db = require('./src/models/dataBase');
const candidatoRoutes = require('./src/Routes/Candidatos');
const fallback = require('./node_modules/express-history-api-fallback');

require('dotenv').config();

let app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

const root = path.join(__dirname, './build');

db.connectDB();

// serve static files built by react
app.use(express.static(root));

app.use('/candidatos', candidatoRoutes);

// Serve react main aplication
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.use(fallback('index.html', { root }));

app.use((req, res, next) => {
  console.log('404 - Error handler: ' + req.headers.host + req.url);
  res.status(404).send({
    message: 'Resource not found',
    type: 'internal'
  });
});

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log('err');
  }
  console.log('==> Listening on port '+port+'. Open up https://0.0.0.0:'+port+'/ in your browser.');
});