import React, { Component } from 'react';

import AccountList from '../components/accountsList';

const accounts = [
  {accountName: "Zions Simple Checking", accountBalance: 10200.92},
  {accountName: "Discover Credit Card", accountBalance: 200.54},
];


export default class Accounts extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3><i className="fa fa-university" aria-hidden="true"></i> Accounts</h3>
        <div className="toolbar">
          <button className="btn btn-1"><i className="fa fa-plus" aria-hidden="true"></i> Add Account</button>
          <button className="btn btn-2"><i className="fa fa-times" aria-hidden="true"></i> Remove Account</button>
        </div>
        <AccountList rows={accounts} />
      </div> 
    );
  }
}
