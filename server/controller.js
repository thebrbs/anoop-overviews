const db = require('../database/index');

module.exports = {
  data: {
    getOverview(req, res) {
      db.retrieve(req.params.restaurantId, (err, results) => {
        if (err && err.message.includes('Cast to number failed for value "NaN"')) {
          res.status(400).json('Bad request');
        } else if (err) {
          res.status(500).json('Unable to retrieve overview data from database');
        } else {
          res.status(200).json(results);
        }
      });
    },
    postOverview(req, res) {
      // 201
    },
    updateOverview(req, res) {
      db.update(req.params.restaurantId, (err, results) => err ?
        res.status(500).end(err) : res.sendStatus(200));
    },
    deleteOverview(req, res) {
      db.delete(req.params.restaurantId, (err, results) => err ?
        res.status(404).end(err) : res.sendStatus(200));
    }
  }
};
