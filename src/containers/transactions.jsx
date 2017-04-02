import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchTransactions, updateTransaction } from '../actions/transactionActions';
import storage from '../utils/localStorageUtils';
import TransactionCategorizer from '../components/transactionList';



const mapTransactions = (transactions) => {
  return transactions.map(obj => {
    return {
      id: obj.id,
      ofxId: obj.ofx_id,
      date: obj.created,
      amount: obj.amount,
      type: obj.transaction_type,
      name: obj.name,
      budget: '---',
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
    return (
      <TransactionCategorizer
        updateTransaction={(id, data) => this.props.updateTransaction(storage.get('auth-token'), id, data)}
        transactions={mapTransactions(this.props.transactions.filter(t => !t.ignore))} />
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
    },
    updateTransaction: (token, id, data) => {
      dispatch(updateTransaction(token, id, data));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
