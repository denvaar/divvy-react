import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

import Transactions from './transactions';
import LoginContainer from '../containers/loginContainer';
import LoginRequiredRoute from '../containers/loginRequiredRoute';
import Dashboard from './dashboard';
import AccountContainer from '../containers/accountContainer';
import Budgets from './budgets';


const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={LoginContainer} />
          <LoginRequiredRoute
            path="/accounts"
            exact
            component={AccountContainer} />
          <LoginRequiredRoute
            path="/budgets"
            exact
            component={Budgets} />
          <LoginRequiredRoute
            path="/dashboard"
            exact
            component={Dashboard} />
          <LoginRequiredRoute
            path="/transactions"
            exact
            component={Transactions} />
          <Route component={NotFound404} />
        </Switch>
      </div>
    </Router>
  );
}

const NotFound404 = () => {
  return (
    <p>Page not found (404)</p>
  );
}

export default App;
