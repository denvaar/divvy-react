import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Accounts from '../components/accounts';


class AccountContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Accounts />
    );
  }
}

const mapStateToProps = (state) => (
  {
  }
)

const mapDispatchToProps = (dispatch) => (
  {
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountContainer);
