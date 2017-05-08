import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchUser } from '../actions/authActions';
import storage from '../utils/localStorageUtils';


const LoginRequiredRoute = ({ component: Component, ...rest }) => {
  const {
    authenticated,
    isAuthenticating,
    authErrors,
    fetchUser } = rest;
  
  let RenderedComponent = (props) => (
    <Redirect to={{
      pathname: '/',
      state: { from: props.location }
    }} />
  );
  
  if (authErrors) {
    /* bad credentials, token invalidated, etc. */
    return <Route {...rest} render={props => RenderedComponent(props)} />
  }

  if (authenticated) {
    /* good to go */
    RenderedComponent = (props) => <Component {...props} />;
  } else if (isAuthenticating) {
    /* request to server hasn't finished yet */
    RenderedComponent = (props) => null;
  } else {
    /* not authenticated yet */
    const token = storage.get('auth-token');
    fetchUser(token);
    RenderedComponent = (props) => null;
  }

  return <Route {...rest} render={props => RenderedComponent(props)} />

}

const mapStateToProps = (state) => (
  {
    authenticated: state.authReducer.authenticated,
    isAuthenticating: state.authReducer.isFetching,
    authErrors: state.authReducer.errors
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    fetchUser: (token) => dispatch(fetchUser(token))
  }
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRequiredRoute);
