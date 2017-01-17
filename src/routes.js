import React from 'react';
import { Route, IndexRoute } from 'react-router';

import TopNav from './components/topNav';
import Accounts from './containers/accounts';
import Transactions from './containers/Transactions';
import Budgets from './containers/Budgets';


export default (
  <Route path="/" component={TopNav}>
    <IndexRoute component={Accounts} />
    <Route path="/transactions" component={Transactions} />
    <Route path="/budgets" component={Budgets} />
  </Route>
);
