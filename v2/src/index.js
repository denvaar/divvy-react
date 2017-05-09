import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import logger from 'redux-logger';

import App from './components/app';
import reducers from './reducers';

import '../stylesheets/custom.css';
import '../stylesheets/main.css';
import '../stylesheets/clouds.css';


const createStoreWithMiddleware = compose(
  applyMiddleware(logger, thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById('react-root')
);

if (module.hot) module.hot.accept();
