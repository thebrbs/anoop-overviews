const { Pool } = require('pg');
const request = require('request');
const expect = require('chai').expect;

describe('Persistent Node Server', function() {
  let pool;

  beforeEach(function(done) {
    pool = new Pool({ database: 'overviews' });
    done();
  });

  afterEach(function() {
    pool.end();
  });

  it('Should output an overview given a restaurant ID', function(done) {
    request('http://localhost:3003/overviews/restaurant/10000000/overview', function(error, response, body) {
      const restDetails = JSON.parse(body);
      expect(restDetails.rest_name).to.equal('Blog Lomo');
      expect(restDetails.payment_options).to.equal('Gold Bullion, Discover, Cash');
      done();
    });
  });

  it('Should insert posted messages to the DB', function(done) {
    // Post a new restaurant/overview
    request({
      method: 'POST',
      uri: 'http://localhost:3003/overviews/restaurant',
      qs: { 
        rest_id: '10100002',
        rest_name: 'Vinnies', 
        price_range: '$30 and under', 
        description: 'Its awesome.', 
        dining_style: 'Bistro', 
        cuisine: 'Casual', 
        tot_reviews: '456', 
        avg_rating: '4', 
        hours_of_operation_brkfst: '8:00am - 11:00am', 
        hours_of_operation_lunch: '12:30pm - 2:30pm', 
        hours_of_operation_dinner: '6:30pm - 10:00pm', 
        phone_number: '310-456-7899',
        website: 'www.vinnies.com',
        payment_options: 'AMEX',
        dress_code: 'Casual',
        executive_chef: 'Vinni Ditolo',
        location_lat: '45.90',
        location_lng: '35.80',
        parking_details: 'Park out back.',
        public_transit: 'Take the bus.'
      }
    }, function () {
      // Post a new tag associated restaurant id 10100000:
      request({
        method: 'POST',
        uri: 'http://localhost:3003/overviews/restaurant/10100002/tag',
        qs: {
          restaurant_id: '10100002',
          tag_name: 'Full Bar',
          vote_count: '1'
        }
      }, function () {
        const queryString = `SELECT row_to_json(r)
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
                          WHERE rest_id = $1) r`;
        const params = ['10100002'];
        pool.query(queryString, params, function(err, results) {
          expect(results.tags[0].tag_name).to.equal('Full Bar');
          done();
        });
      });
    });
  });

  it('Should update an overview given a restaurant ID and queries', function(done) {
    request({
      method: 'PUT',
      uri: 'http://localhost:3003/overviews/restaurant/10000000/overview',
      qs: { 
        rest_name: 'Vinnies', 
        price_range: '$30 and under', 
        description: 'Its awesome.', 
        dining_style: 'Bistro', 
        cuisine: 'Casual', 
        tot_reviews: '456', 
        avg_rating: '4', 
        hours_of_operation_brkfst: '8:00am - 11:00am', 
        hours_of_operation_lunch: '12:30pm - 2:30pm', 
        hours_of_operation_dinner: '6:30pm - 10:00pm', 
        phone_number: '310-456-7899',
        website: 'www.vinnies.com',
        payment_options: 'AMEX',
        dress_code: 'Casual',
        executive_chef: 'Vinni Ditolo',
        location_lat: '45.90',
        location_lng: '35.80',
        parking_details: 'Park out back.',
        public_transit: 'Take the bus.'
      }
    }, function () {
        const queryString = `SELECT row_to_json(r)
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
                          WHERE rest_id = $1) r`;
        const params = ['10000000'];
        pool.query(queryString, params, function(err, results) {
          expect(results.rest_name).to.equal('Vinnies');
          done();
        });
    });
  });

  it('Should delete an overview given a restaurant ID', function(done) {
    request('http://localhost:3003/overviews/restaurant/10000000/overview', function(error, response, body) {
      const restDetails = JSON.parse(body);
      expect(restDetails.rest_name).to.equal('Blog Lomo');
      expect(restDetails.payment_options).to.equal('Gold Bullion, Discover, Cash');
      done();
    });
  });

});
