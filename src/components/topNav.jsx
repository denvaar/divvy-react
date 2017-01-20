import React from 'react';

import SideNav from '../components/sideNav';


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
        <span className="user">
          <i className="fa fa-cogs fake-link" aria-hidden="true"></i>
          &nbsp;&nbsp;|&nbsp;&nbsp;Denver | <span className="fake-link">logout</span>          </span>
      </div>
      <SideNav menuItems={menuItems} />
      {props.children}
    </div>
  ); 
}

export default TopNav;
