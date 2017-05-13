import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchBankAccounts } from '../actions/accountActions';
import storage from '../utils/localStorageUtils';
import Accounts from '../components/accounts';


class AccountContainer extends Component {
  constructor(props) {
    super(props);
    this.authToken = storage.get('auth-token');
  }

  componentDidMount() {
    this.props.fetchBankAccounts(this.authToken);
  }

  render() {
    const { bankAccounts } = this.props;
    return (
      <Accounts bankAccounts={bankAccounts} />
    );
  }
}

const mapStateToProps = (state) => (
  {
    isFetching: state.accountReducer.isFetching,
    bankAccounts: state.accountReducer.bankAccounts
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    fetchBankAccounts: (token) => {
      dispatch(fetchBankAccounts(token));
    }
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountContainer);
