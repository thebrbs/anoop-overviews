import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Webpage from './components/Webpage.jsx';

ReactDOM.render((
  <BrowserRouter>
    <Route exact path="/restaurant/:restaurantId" component={Webpage} />
  </BrowserRouter>
), document.getElementById('webpage'));
