import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import storage from '../utils/localStorageUtils';
import Transactions from '../components/transactions';
import { fetchBudgets } from '../actions/budgetActions';
import {
  fetchTransactions,
  updateTransaction,
  categorizeTransaction,
} from '../actions/transactionActions';


class TransactionContainer extends Component {
  constructor(props) {
    super(props);
    this.authToken = storage.get('auth-token');
  }

  componentDidMount() {
    this.props.fetchTransactions(this.authToken);
    this.props.fetchBudgets(this.authToken);
  }

  render() {
    const { transactions } = this.props;
    return (
      <Transactions transactions={transactions} />
    );
  }
}

const mapStateToProps = (state) => {
  const { transactions } = state.transactionReducer;
  const { budgets } = state.budgetReducer;
  
  return {
    isFetching:
      state.transactionReducer.isFetching &&
      state.budgetReducer.isFetching,
    transactions,
    budgets
  };  
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBudgets: (token) => {
      dispatch(fetchBudgets(token));
    },  
    fetchTransactions: (token) => {
      dispatch(fetchTransactions(token));
    },  
    updateTransaction: (token, id, data) => {
      dispatch(updateTransaction(token, id, data));
    },  
    categorizeTransaction: (token, id, data) => {
      dispatch(categorizeTransaction(token, id, data));
    }   
  };  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionContainer);
