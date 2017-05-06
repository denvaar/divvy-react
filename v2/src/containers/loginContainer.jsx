import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Login from '../components/login';
import { requestToken } from '../actions/authActions';


const defaultRoute = () => ( { from: { pathname: '/public' } } )

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(email, password) {
    const { onHandleLogin } = this.props;
    onHandleLogin({ username: email, password: password });
  }

  render() {
    const { errors, authenticated } = this.props;
    
    if (authenticated) {
      const { from } = this.props.location.state || defaultRoute()
      return <Redirect to={from} />
    }

    return (
      <Login handleLogin={this.handleLogin} errors={errors} />
    );
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.authReducer.authenticated,
    errors: state.authReducer.errors
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    onHandleLogin: (credentials) => dispatch(requestToken(credentials))
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
