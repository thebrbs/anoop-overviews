const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/index');

const app = express();

app.use(bodyParser.json());

app.use('/overviewsBundle.js', express.static(path.join(__dirname, '../public/dist/bundle.js')));

app.get('/restaurant/:restaurantId/overview', (req, res) => {
  db.retrieve(req.params.restaurantId, (err, results) => {
    if (err && err.message.includes('Cast to number failed for value "NaN"')) {
      res.status(400).json('Bad request');
    } else if (err) {
      res.status(500).json('Unable to retrieve overview data from database');
    } else {
      res.status(200).json(results);
    }
  });
});

module.exports = app;
