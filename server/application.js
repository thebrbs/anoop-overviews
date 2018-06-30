const controller = require('./controller');
const express = require('express');
// const logger = require('./logger');
// const morgan = require('morgan');
const path = require('path');

const app = express();

app
  .use('/restaurant/:restaurantId', express.static(path.join(__dirname, '../public/index.html')))
  .use('/overviewsBundle.js', express.static(path.join(__dirname, '../public/dist/bundle.js')))
  .use('/overviews/images/', express.static(path.join(__dirname, '../public/images/')))
  .get('/overviews/restaurant/:restaurantId/overview', controller.data.getOverview)
  .post('/overviews/restaurant', controller.data.postOverview)
  .post('/overviews/restaurant/:restaurantId/tag', controller.data.postTag)
  .put('/overviews/restaurant/:restaurantId/overview', controller.data.updateOverview)
  .delete('/overviews/restaurant/:restaurantId/overview', controller.data.deleteOverview)

module.exports = app;
