import React from 'react';
import ReviewsOverview from './ReviewsOverview.jsx';

const Overview = (props) => (
  <div className="card border-top-0 border-left-0 border-right-0 rounded-0">
    <div className="card-body">
      <h1 className="overview-title">Restaurant Name</h1>
      <div><ReviewsOverview /></div>
    </div>
    
  </div>
);

export default Overview;