import React from 'react';
import axios from 'axios';
import ReviewsOverview from './ReviewsOverview.jsx';
import TopTags from './TopTags.jsx';
import Description from './Description.jsx';
import RestaurantInfo from './RestaurantInfo.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      displayAll: false,
    };
    this.getInitialData();
    this.toggleDisplayAll = this.toggleDisplayAll.bind(this);
  }

  getInitialData() {
    axios.get(`/restaurant/${this.props.match.params.restaurantId}/overview`)
      .then(response => {
        this.setState({
          restaurant: response.data[0],
        });
      })
      .catch(err => console.error(err));
  }

  toggleDisplayAll() {
    const restaurantInfoDiv = document.getElementById('restaurantInfo');
    restaurantInfoDiv.classList.toggle('hidden');
    this.setState({
      displayAll: !this.state.displayAll,
    });
  }

  render() {
    if (Object.keys(this.state.restaurant).length !== 0) {
      return (
        <div className="card border-0 rounded-0">
          <div className="card-body">
            <h1 className="overview-title">{this.state.restaurant.rest_name}</h1>
            <ReviewsOverview priceRange={this.state.restaurant.price_range} cuisine={this.state.restaurant.cuisine} />
            <TopTags tags={this.state.restaurant.tags} />
            <Description description={this.state.restaurant.description} />
            <RestaurantInfo restaurant={this.state.restaurant} displayAll={this.state.displayAll} />
            {!this.state.displayAll ? <div id="fade">&nbsp;</div> : null}
          </div>
          <div>
            <div className="displayAllBtn" onClick={this.toggleDisplayAll}>
              {this.state.displayAll ? 'View less details' : 'View all details'}
            </div>
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
