import React from 'react';
import { Route } from 'react-router-dom';
import Overview from './Overview.jsx';

const OverviewModule = () => (
  <div>
    <Route exact path="/restaurant/:restaurantId" component={Overview} />
  </div>
);

export default OverviewModule;
