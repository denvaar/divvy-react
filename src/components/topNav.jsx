import React from 'react';

import SideNav from '../components/sideNav';

const isAuthenticated = false;
const TopNav = (props) => {
  const menuItems = [
    {label: 'Accounts', route: '/'},
    {label: 'Budgets', route: '/budgets'},
    {label: 'Transactions', route: '/transactions'},
    {label: 'Tools', route: '/tools'},
  ];

  return (
    <div>
      <div className="header">
        <span className="logo">Divvy</span>
        {isAuthenticated ? 
          <span className="user">
            <i className="fa fa-cogs fake-link" aria-hidden="true"></i>
            &nbsp;&nbsp;|&nbsp;&nbsp;Denver | <span className="fake-link">logout</span>          </span>
        : null}
      </div>
      {isAuthenticated ? <SideNav menuItems={menuItems} /> : null}
      {props.children}
    </div>
  ); 
}

export default TopNav;
