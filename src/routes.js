import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Accounts from './containers/accounts';
import Budgets from './containers/Budgets';
import Login from './components/login';
import NotFound from './components/notFound';
import TopNav from './components/topNav';
import Transactions from './containers/Transactions';
import RequireAuth from './components/requireAuth';


export default (
  <Route path="/" component={TopNav}>
    <IndexRoute component={Login} />
    <route path="/accounts" component={RequireAuth(Accounts)} />
    <Route path="/transactions" component={Transactions} />
    <Route path="/budgets" component={Budgets} />
    <Route path="*" component={NotFound} />
  </Route>
);
