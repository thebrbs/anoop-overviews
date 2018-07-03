const controller = require('./controller');
const express = require('express');
// const logger = require('./logger');
// const morgan = require('morgan');
const path = require('path');

const app = express();

app
  .use('/restaurant/:restaurantId', express.static(path.join(__dirname, '../public/index.html')))

  .use('/', express.static(path.join(__dirname, '../public/dist')))
  // .use('/overviewsBundle-server.js', express.static(path.join(__dirname, '../public/dist/bundle-server.js')))
  // .use('/overviewsBundle-localmicro.js', express.static(path.join(__dirname, '../public/dist/bundle-localmicro.js')))
  // .use('/styles.css', express.static(path.join(__dirname, '../public/dist/styles.css')))
  
  .use('/overviews/images/', express.static(path.join(__dirname, '../public/images/')))
  .get('/overviews/restaurant/:restaurantId/overview', controller.data.getOverview)
  .post('/overviews/restaurant', controller.data.postOverview)
  .post('/overviews/restaurant/:restaurantId/tag', controller.data.postTag)
  .put('/overviews/restaurant/:restaurantId/overview', controller.data.updateOverview)
  .delete('/overviews/restaurant/:restaurantId/overview', controller.data.deleteOverview)

module.exports = app;
