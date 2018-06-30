const redis = require("redis");
const client = redis.createClient('/tmp/redis.sock');

const retrieveOvrCache = (restId, callback) => {
  client.get(restId, (err, results) => {
    if (results === null || err) {
      callback(err || true, null);
    } else {
      callback(null, results);
    }
  });
};

const setOvrCache = (restId, value, callback) => {
  client.setex(restId, 300, value);
  if (callback) {
    callback();
  }
};

module.exports = {
  retrieveOvrCache,
  setOvrCache,
};
