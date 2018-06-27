const { Client } = require('pg');
const postgresConfig = './postgresconfig';
const client = new Client({ database: 'overviews' });

client.connect();

const retrieveOvr = (restId) => {
  let result;
  const query1 = {
    name: 'fetch-restaurant',
    text: 'SELECT * FROM overviews WHERE rest_id = $1',
    values: [restId],
  };
  const query2 = {
    name: 'fetch-tags',
    text: 'SELECT tags.tag_name, restaurants_tags.vote_count FROM tags, restaurants_tags WHERE restaurants_tags.restaurant_id = $1 AND tags.id = restaurants_tags.tag_id',
    values: [restId],
  };
  return client.query(query1).then(restrnt => {
    result = restrnt.rows[0];
    return client.query(query2);
  })
  .then(tags => {
    result.tags = tags.rows;
    return result;
  });
};

const createOvr = (restDetails) => {
  const query = {
    name: 'create-restaurant',
    text: 'INSERT INTO overviews (rest_name, price_range, description, dining_style, cuisine, tot_reviews, avg_rating, hours_of_operation_brkfst, hours_of_operation_lunch, hours_of_operation_dinner, phone_number, website, payment_options, dress_code, executive_chef, location_lat, location_lng, parking_details, public_transit) VALUES ()',
    values: [...restDetails],
  };
  return client.query(query);
};
// updateOvr
const updateOvr = () => {

};
// deleteOvr
const deleteOvr = (restId) => {
  const query = {
    name: 'delete-restaurant',
    text: 'DELETE FROM overviews WHERE rest_id = $1',
    values: [restId],
  };
  return client.query(query);
};

module.exports = {
  retrieveOvr,
  createOvr,
  updateOvr,
  deleteOvr,
};
