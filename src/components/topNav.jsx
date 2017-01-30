import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions/authActions';
import SideNav from '../components/sideNav';

const TopNav = (props) => {
  const menuItems = [
    {label: 'Accounts', route: '/accounts'},
    {label: 'Budgets', route: '/budgets'},
    {label: 'Transactions', route: '/transactions'},
    {label: 'Tools', route: '/tools'},
  ];

  return (
    <div>
      <div className="header">
        <span className="logo">Divvy</span>
        {props.authenticated ? 
          <span className="user">
            <i className="fa fa-cogs fake-link" aria-hidden="true"></i>
            &nbsp;&nbsp;|&nbsp;&nbsp;{props.user} | <span className="fake-link" onClick={() => props.logout()}>logout</span>          </span>
        : null}
      </div>
      {props.authenticated ? <SideNav menuItems={menuItems} /> : null}
      {props.children}
    </div>
  ); 
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.authReducer.authenticated,
    user: state.authReducer.name
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
