import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchBudgets } from '../actions/budgetActions';
import {
  fetchTransactions,
  updateTransaction,
  categorizeTransaction,
} from '../actions/transactionActions';
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
    this.authToken = storage.get('auth-token');
  }

  componentDidMount() {
    this.props.fetchTransactions(this.authToken);
    this.props.fetchBudgets(this.authToken);
  }

  render() {
    const uncategorizedTransactions = mapTransactions(
      this.props.transactions.filter(t => !t.ignore && !t.categorized)
    );
    return (
      <div>
        {this.props.isFetching ?
          <p>loading...</p>
        :
          <TransactionCategorizer
            budgets={this.props.budgets}
            transactions={uncategorizedTransactions}
            categorizeTransaction={(id, data) => this.props.categorizeTransaction(this.authToken, id, data)}
            updateTransaction={(id, data) => this.props.updateTransaction(this.authToken, id, data)} />
        }
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
