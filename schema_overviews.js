const mongoose = require('mongoose');

const overviewSchema = new mongoose.Schema({
  rest_id: Number,
  rest_name: String,
  dining_style: String,
  cuisines: String,
  hours_of_operation: {
    breakfast: String,
    lunch: String,
    dinner: String,
  },
  phone_number: String,
  website: String,
  payment_options: String,
  dress_code: String,
  executive_chef: String,
  address: String,
  neighborhood: String,
  cross_street: String,
  parking_details: String,
  public_transit: String,
  tags: [{ tagName: String, voteCount: Number}],
});