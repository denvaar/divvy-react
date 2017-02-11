import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTransactions } from '../actions/transactionActions';
import storage from '../utils/localStorageUtils';
import TransactionList from '../components/transactionList';



const mapTransactions = (transactions) => {
  return transactions.map(obj => {
    return {
      date: obj.created,
      amount: obj.amount,
      type: obj.transaction_type,
      name: obj.name,
      budget: 'TODO',
    };
  });
}

class Transactions extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const token = storage.get('auth-token');
    this.props.fetchTransactions(token);
  }

  render() {
    console.log(this.props.transactions); 
    return (
      <TransactionList rows={mapTransactions(this.props.transactions)} />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactionReducer.transactions
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTransactions: (token) => {
      dispatch(fetchTransactions(token));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
