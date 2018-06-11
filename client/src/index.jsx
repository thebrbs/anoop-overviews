import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import OverviewModule from './components/OverviewModule.jsx';

ReactDOM.render((
  <BrowserRouter>
    <OverviewModule />
  </BrowserRouter>
), document.getElementById('overview_module'));
