const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: [process.env.DB_CASSANDRA_HOSTNAME1], keyspace: 'cavatable' });
 
const retrieveOvr = (restId) => {
  let result;
  const query1 = 'SELECT * FROM cavatable.overviews WHERE rest_id = ?';
  const params1 = [restId];
  const query2 = 'SELECT tag_name, tag_vote_count FROM cavatable.restaurants_tags WHERE rest_id = ?';
  const params2 = [restId];

  return client.execute(query1, params1, { prepare: true })
    .then(restrnt => {
      result = restrnt.rows[0];
      return client.execute(query2, params2, { prepare: true })
    })
    .then(tags => {
      result.tags = tags.rows;
      return result;
    });
};

const createOvr = (restDetails) => {
  const query = 'INSERT INTO cavatable.overviews (rest_name, price_range, description, dining_style, cuisine, tot_reviews, avg_rating, hours_of_operation_brkfst, hours_of_operation_lunch, hours_of_operation_dinner, phone_number, website, payment_options, dress_code, executive_chef, location_lat, location_lng, parking_details, public_transit) VALUES (?)';
  const params = [...restDetails];
  return client.execute(query, params, { prepare: true });
};

const updateOvr = (restObj) => {
  const query = 'UPDATE cavatable.overviews SET ? = ? WHERE rest_id = ?';
  const params = [...restObj];
  return client.execute(query, params, { prepare: true });
};

const deleteOvr = (restId) => {
  const query = 'DELETE FROM overviews WHERE rest_id = ?';
  const params = [restId];
  return client.execute(query, params, { prepare: true });
};

module.exports = {
  retrieveOvr,
  createOvr,
  updateOvr,
  deleteOvr,
};
