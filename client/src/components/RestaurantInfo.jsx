import React from 'react';
import RestaurantInfoEntry from './RestaurantInfoEntry.jsx';

const RestaurantInfo = (props) => (
  <div id="restaurantInfo" className="container">
    <div className="row">
      <div className="col">
        <RestaurantInfoEntry section="dining_style" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="cuisine" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="hours_of_operation" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="phone_number" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="website" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="payment_options" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="dress_code" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="executive_chef" restaurant={props.restaurant} />
      </div>
      <div className="col">
        <RestaurantInfoEntry section="address" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="neighborhood" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="cross_street" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="parking_details" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="public_transit" restaurant={props.restaurant} />
        <RestaurantInfoEntry section="tags" restaurant={props.restaurant} />
      </div>
    </div>
  </div>
);

export default RestaurantInfo;
