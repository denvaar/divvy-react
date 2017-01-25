import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import { fetchUser } from '../actions/authActions';
import storage from '../utils/localStorageUtils';


const RequireAuth = (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      const token = storage.get('auth-token');
      if (!this.props.authenticated && !token) {
        browserHistory.push('/');
      } else if (!this.props.authenticated && token) {
        this.props.fetchUser(token);
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = (state) => {
    return {
      authenticated: state.authReducer.authenticated
    };
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchUser: (token) => {
        dispatch(fetchUser(token));
      }
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}

export default RequireAuth;
