import React, { Component } from 'react';

import TopNav from './topNav';
import Transactions from '../containers/transactions';
import Accounts from '../containers/accounts';
import Budgets from '../containers/budgets';


export default class DivvyApp extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopNav />
        <Transactions />
        <Accounts />        
        <Budgets /> 
        
        <h3><i className="fa fa-pie-chart" aria-hidden="true"></i> Charts & Reports</h3>
      </div>
    );
  }

}
