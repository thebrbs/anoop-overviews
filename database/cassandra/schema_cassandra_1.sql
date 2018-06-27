CREATE KEYSPACE IF NOT EXISTS cavatable
WITH REPLICATION = { 'class': 'SimpleStrategy', 'replication_factor': 2 };

USE cavatable;

CREATE TABLE IF NOT EXISTS cavatable.overviews (
  rest_id INT,
  rest_name  TEXT,
  price_range TEXT,
  description TEXT,
  dining_style TEXT,
  cuisine TEXT,
  tot_reviews INT,
  avg_rating INT,
  hours_of_operation_brkfst TEXT,
  hours_of_operation_lunch TEXT,
  hours_of_operation_dinner TEXT,
  phone_number TEXT,
  website TEXT,
  payment_options TEXT,
  dress_code TEXT,
  executive_chef TEXT,
  location_lat TEXT,
  location_lng TEXT,
  neighborhood TEXT,
  cross_street TEXT,
  parking_details TEXT,
  public_transit TEXT,
  PRIMARY KEY(rest_id)
);

CREATE CUSTOM INDEX IF NOT EXISTS payment_options_idx 
ON overviews (payment_options) 
USING 'org.apache.cassandra.index.sasi.SASIIndex' 
WITH OPTIONS = {'mode': 'CONTAINS', 'analyzer_class': 'org.apache.cassandra.index.sasi.analyzer.StandardAnalyzer', 'case_sensitive': 'false'};

CREATE TABLE IF NOT EXISTS cavatable.restaurants_tags (
  rest_id INT,
  tag_id INT,
  tag_name TEXT,
  tag_vote_count INT,
  PRIMARY KEY((rest_id), tag_id)
);
