const controller = require('./controller');
const express = require('express');
const logger = require('./logger');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode < 400
    }, stream: process.stderr
  }))
  .use(morgan('dev', {
    skip: function (req, res) {
        return res.statusCode >= 400
    }, stream: process.stdout
  }))
  .use('/restaurant/:restaurantId', express.static(path.join(__dirname, '../public/index.html')))
  .use('/overviewsBundle.js', express.static(path.join(__dirname, '../public/dist/bundle.js')))
  .use('/images/star-rating.png', express.static(path.join(__dirname, '../public/images/star-rating.png')))
  .get('/overviews/restaurant/:restaurantId/overview', controller.data.getOverview)
  .post('/overviews/restaurant', controller.data.postOverview)
  .put('/overviews/restaurant/:restaurantId/overview', controller.data.updateOverview)
  .delete('/overviews/restaurant/:restaurantId/overview', controller.data.deleteOverview);

module.exports = app;
