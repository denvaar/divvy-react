import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import storage from '../utils/localStorageUtils';
import Budgets from '../components/budgets';
import { fetchBudgets } from '../actions/budgetActions';


class BudgetContainer extends Component {
  constructor(props) {
    super(props);
    this.authToken = storage.get('auth-token');
  }

  componentDidMount() {
    this.props.fetchBudgets(this.authToken);
  }

  render() {
    const { budgets } = this.props;
    return (
      <Budgets budgets={budgets} />
    );
  }
}

const mapStateToProps = (state) => {
  const { budgets } = state.budgetReducer;
  
  return {
    isFetching: state.budgetReducer.isFetching,
    budgets
  };  
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBudgets: (token) => {
      dispatch(fetchBudgets(token));
    },  
  };  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BudgetContainer);
