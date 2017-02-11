import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Accounts from './containers/accounts';
import Budgets from './containers/Budgets';
import Login from './components/login';
import NotFound from './components/notFound';
import TopNav from './components/topNav';
import Transactions from './containers/Transactions';
import RequireAuth from './components/requireAuth';
import AccountDetailForm from './components/accountDetailForm';


export default (
  <Route path="/" component={TopNav}>
    <IndexRoute component={Login} />
    <Route path="/accounts" component={RequireAuth(Accounts)} />
    <Route path="/accounts/create" component={RequireAuth(AccountDetailForm)} />
    <Route path="/transactions" component={RequireAuth(Transactions)} />
    <Route path="/budgets" component={RequireAuth(Budgets)} />
    <Route path="*" component={NotFound} />
  </Route>
);
