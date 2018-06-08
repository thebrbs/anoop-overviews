import React from 'react';
import PropTypes from 'prop-types';
import icons from '../icons.jsx';

const RestaurantInfoEntry = (props) => {
  const sectionTitles = {
    dining_style: 'Dining Style',
    cuisine: 'Cuisine',
    hours_of_operation: 'Hours of Operation',
    phone_number: 'Phone Number',
    website: 'Website',
    payment_options: 'Payment Options',
    dress_code: 'Dress Code',
    executive_chef: 'Executive Chef',
    neighborhood: 'Neighborhood',
    cross_street: 'Cross Street',
    parking_details: 'Parking Details',
    public_transit: 'Public Transit',
    tags: 'Additional',
  };

  if (props.section === 'hours_of_operation') {
    return (
      <div className="infoSection">
        {icons.hours_of_operation}
        <span className="infoTitle">{sectionTitles.hours_of_operation}</span>
        <div className="infoContent">
          <div>{props.restaurant.hours_of_operation.breakfast}</div>
          <div>{props.restaurant.hours_of_operation.lunch}</div>
          <div>{props.restaurant.hours_of_operation.dinner}</div>
        </div>
      </div>
    );
  } else if (props.section === 'website') {
    return (
      <div className="infoSection">
        {icons.website}
        <span className="infoTitle">{sectionTitles.website}</span>
        <div className="infoContent">
          <a href={props.restaurant.website}>{props.restaurant.website}</a>
        </div>
      </div>
    );
  } else if (props.section === 'address') {
    return (
      <div className="infoSection">
        {icons.address}
        <span className="infoTitle">{props.restaurant.address}</span>
      </div>
    );
  } else if (props.section === 'tags') {
    const tagNames = props.restaurant.tags.map(tagObj => tagObj.tagName);
    return (
      <div className="infoSection">
        {icons.tags}
        <span className="infoTitle">{sectionTitles.tags}</span>
        <div className="infoContent">
          {tagNames.join(', ')}
        </div>
      </div>
    );
  }
  return (
    <div className="infoSection">
      {icons[props.section]}
      <span className="infoTitle">{sectionTitles[props.section]}</span>
      <div className="infoContent">
        {props.restaurant[props.section]}
      </div>
    </div>
  );
};

RestaurantInfoEntry.propTypes = {
  restaurant: PropTypes.object,
};

export default RestaurantInfoEntry;
