const controller = require('./controller');
const express = require('express');
const path = require('path');

const app = express();

app.use('/restaurant/:restaurantId', express.static(path.join(__dirname, '../public/index.html')))
  .use('/overviewsBundle.js', express.static(path.join(__dirname, '../public/dist/bundle.js')))
  .use('/images/star-rating.png', express.static(path.join(__dirname, '../public/images/star-rating.png')))
  .get('/overviews/restaurant/:restaurantId/overview', contoller.data.getOverview)
  .post('', controller.data.postOverview)
  .put('/overviews/restaurant/:restaurantId/overview', controller.data.updateOverview)
  .delete('', controller.data.deleteOverview);

module.exports = app;
