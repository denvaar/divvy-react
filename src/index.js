import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';
import '../styles/styles.css';


ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('react-root')
);

if (module.hot) module.hot.accept();
