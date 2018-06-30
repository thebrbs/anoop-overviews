// const db = require('../database/mongo');
// const db = require('../database/cassandra');
const db = require('../database/postgres');
const redis = require('./cacheRedis');

module.exports = {
  data: {
    getOverview(req, res) {
      const restId = req.params.restaurantId;
      redis.retrieveOvrCache(restId, (err, cachedRecord) => {
        if (cachedRecord) {
          res.status(200).send(cachedRecord);
        } else {
          db.retrieveOvr(restId)
            .then(data => {
              redis.setOvrCache(restId, JSON.stringify(data.rows[0].row_to_json), () => {
                res.json(data.rows[0].row_to_json);
              });
            })
            .catch(err => res.status(500).end(err));
        }
      })
    },
    postOverview(req, res) {
      db.createOvr(req.query)
        .then(() => res.sendStatus(201))
        .catch(err => res.status(404).end(err));
    },
    postTag(req, res) {
      db.createTag(req.query)
        .then(() => res.sendStatus(201))
        .catch(err => res.status(404).end(err));
    },
    updateOverview(req, res) {
      db.updateOvr(req.params.restaurantId, req.query)
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
