import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import SearchBar from './searchBar';
import TransactionRow from './transactionRow';
import NoTransactions from './noTransactions';
import withSideNav from './withSideNav';
import { transactionNavProps as navProps } from '../utils/sideNavData';


const Transactions = ({ transactions, toggleSideNav }) => {
  const transactionRows = transactions.map((props, i) => {
    return <TransactionRow key={i} {...props} />
  });
  
  return (
    <div className="grid">
      <Header title="Transactions" handleMenuClick={toggleSideNav} />
      <SearchBar />
      {!transactionRows.length && <NoTransactions />}
      {transactionRows} 
    </div>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.array
}

export default withSideNav(Transactions, navProps);
