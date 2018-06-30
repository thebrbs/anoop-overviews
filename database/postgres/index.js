const { Pool } = require('pg');
const pool = new Pool({ database: 'overviews' });

const retrieveOvr = (restId) => {
  const query = {
    name: 'fetchjson-restaurantAndTags',
    text: `SELECT
            row_to_json(r)
          FROM (SELECT
            *,
            (SELECT
              array_to_json(array_agg(row_to_json(t)))
            FROM (SELECT
              tags.tag_name,
              restaurants_tags.vote_count
            FROM tags,
                restaurants_tags
            WHERE restaurants_tags.restaurant_id = overviews.rest_id
            AND tags.id = restaurants_tags.tag_id) t)
            AS tags
          FROM overviews
          WHERE rest_id = $1) r`,
    values: [restId]
  }
  return pool.query(query);
};

const createOvr = (queryObj) => {
  const columnNames = Object.keys(queryObj).join(', ');
  const values = Object.values(queryObj);
  const placeHolders = () => {
    return values.map((el, i) => `$${i + 1}`).join(', ');
  }
  return pool.query(`INSERT INTO overviews(${columnNames}) VALUES(${placeHolders()})`, values);
};

const createTag = (queryObj) => {
  const values = Object.values(queryObj);
  return pool.query(`INSERT INTO restaurants_tags
                      (restaurant_id, tag_id, vote_count)
                    VALUES
                      ($1, 
                      (SELECT id FROM tags WHERE tag_name = $2),
                      $3)`, values);
}

const updateOvr = (restId, queryObj) => {
  const columnsAndNewValsArr = Object.entries(queryObj).map(pair => pair.join(' = '));
  const setPlaceHolders = () => {
    return columnsAndNewValsArr.map((el, i) => `$${i + 1}`).join(', ');
  }
  return pool.query(`INSERT INTO overviews SET ${setPlaceHolders()} 
                    WHERE rest_id = $${columnsAndNewValsArr.length + 1}`, [...columnsAndNewValsArr, restId]);
};

const deleteOvr = (restId) => {
  const query = {
    name: 'delete-restaurant',
    text: 'DELETE FROM overviews WHERE rest_id = $1',
    values: [restId],
  };
  return pool.query(query);
};

module.exports = {
  retrieveOvr,
  createOvr,
  createTag,
  updateOvr,
  deleteOvr,
};
