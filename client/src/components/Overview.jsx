import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ReviewsOverview from './ReviewsOverview.jsx';
import TopTags from './TopTags.jsx';
import Description from './Description.jsx';
import RestaurantInfo from './RestaurantInfo.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
    };
  }

  componentDidMount() {
    axios.get('/restaurant/1001/overview')
      .then(response => {
        this.setState({
          restaurant: response.data[0],
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    if (Object.keys(this.state.restaurant).length !== 0) {
      return (
        <div className="card border-top-0 border-left-0 border-right-0 rounded-0">
          <div className="card-body">
            <h1 className="overview-title">{this.state.restaurant.rest_name}</h1>
            <ReviewsOverview priceRange={this.state.restaurant.price_range} cuisine={this.state.restaurant.cuisine} />
            <TopTags tags={this.state.restaurant.tags} />
            <Description description={this.state.restaurant.description} />
            <RestaurantInfo restaurant={this.state.restaurant} />
          </div> 
        </div>
      );
    }
    return (
      <div></div>
    );
  }
}

export default Overview;
