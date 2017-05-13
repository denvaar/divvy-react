import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  withRouter
} from 'react-router-dom';

import TransactionContainer from '../containers/transactionContainer';
import LoginContainer from '../containers/loginContainer';
import LoginRequiredRoute from '../containers/loginRequiredRoute';
import Dashboard from './dashboard';
import AccountContainer from '../containers/accountContainer';
import Budgets from './budgets';
import NotFound404 from './notFound404';


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
            component={TransactionContainer} />
          <Route component={NotFound404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
