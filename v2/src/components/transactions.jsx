import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import SearchBar from './searchBar';
import TransactionRow from './transactionRow';
import withSideNav from './withSideNav';
import { transactionNavProps as navProps } from '../utils/sideNavData';

const transactionData = [
  {
    name: "Smith's Food",
    icon: "cutlery",
    type: "debit",
    amount: 34.45,
    date: "04/23/17"
  },
  {
    name: "Jersey Mikes's Subs",
    icon: "cutlery",
    type: "debit",
    amount: 12.50,
    date: "04/05/17"
  },
  {
    name: "Jersey Mikes's Subs",
    icon: "cutlery",
    type: "debit",
    amount: 12.50,
    date: "04/05/17"
  }
];


const Transactions = ({ toggleSideNav }) => {
  const transactionRows = transactionData.map((props, i) => {
    return <TransactionRow key={i} {...props} />
  });
  
  return (
    <div className="grid">
      <Header title="Transactions" handleMenuClick={toggleSideNav} />
      <SearchBar />
      {transactionRows} 
    </div>
  );
}

Transactions.propTypes = {
}

export default withSideNav(Transactions, navProps);
