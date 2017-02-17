import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

import { fetchBankAccounts } from '../actions/accountActions';
import storage from '../utils/localStorageUtils';

import AccountList from '../components/accountsList';

/*
const accounts = [
  {accountName: "Zions Simple Checking", accountBalance: 10200.92},
  {accountName: "Discover Credit Card", accountBalance: 200.54},
];
*/

const mapBankAccounts = (accountData) => {
  return accountData.map(obj => {
    return {
      'accountName': obj.name,
      'accountBalance': obj.balance
    };
  });
}

class Accounts extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = storage.get('auth-token');
    this.props.fetchBankAccounts(token);
  }

  render() {
    return (
      <div>
        <h3><i className="fa fa-university" aria-hidden="true"></i> Accounts</h3>
        <div className="toolbar">
          <button className="btn btn-1" onClick={() => {browserHistory.push('/accounts/create')}}><i className="fa fa-plus" aria-hidden="true"></i> Add Account</button>
          <button className="btn btn-2"><i className="fa fa-times" aria-hidden="true"></i> Remove Account</button>
        </div>
        <AccountList rows={mapBankAccounts(this.props.bankAccounts)} />
      </div> 
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    bankAccounts: state.accountReducer.bankAccounts
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBankAccounts: (token) => {
      dispatch(fetchBankAccounts(token));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Accounts);
