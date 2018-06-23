DROP DATABASE IF EXISTS overviews;
CREATE DATABASE overviews;

\C overviews;

CREATE TABLE IF NOT EXISTS overviews (
  rest_id serial PRIMARY KEY,
  rest_name  VARCHAR(100),
  price_range VARCHAR(100),
  description VARCHAR(1500),
  dining_style VARCHAR(100),
  cuisine VARCHAR(30),
  tot_reviews INTEGER,
  avg_rating INTEGER,
  hours_of_operation_brkfst VARCHAR(100),
  hours_of_operation_lunch VARCHAR(100),
  hours_of_operation_dinner VARCHAR(100),
  phone_number VARCHAR(30),
  website VARCHAR(100),
  payment_options VARCHAR(100),
  dress_code VARCHAR(100),
  executive_chef VARCHAR(100),
  location_lat VARCHAR(30),
  location_lng VARCHAR(30),
  neighborhood VARCHAR(100),
  cross_street VARCHAR(100),
  parking_details VARCHAR(900),
  public_transit VARCHAR(900)
);

CREATE TABLE IF NOT EXISTS tags(
  id SERIAL PRIMARY KEY,
  tag_name VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS restaurants_tags(
  id SERIAL PRIMARY KEY,
  restaurant_id INT REFERENCES overviews(rest_id),
  tag_id INT REFERENCES tags(id),
  vote_count INT,
  UNIQUE KEY(restaurant_id, tag_id )
);
