// const db = require('../database/mongo');
const db = require('../database/cassandra');
// const db = require('../database/postgres');

module.exports = {
  data: {
    getOverview(req, res) {
      db.retrieveOvr(req.params.restaurantId)
        .then(restDetails => res.json(restDetails))
        .catch(err => res.status(500).end(err));
    },
    postOverview(req, res) {
      db.createOvr(req.params)
        .then(() => res.sendStatus(201))
        .catch(err => res.status(404).end(err));
    },
    updateOverview(req, res) {
      db.updateOvr(req.params)
        .then(() => res.sendStatus(202))
        .catch(err => res.status(500).end(err));
    },
    deleteOverview(req, res) {
      db.deleteOvr(req.params.restaurantId)
        .then(() => res.sendStatus(301)) 
        .catch(err => res.status(404).end(err));
    }
  },
};
