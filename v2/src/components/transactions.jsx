import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import SearchBar from './searchBar';
import TransactionRow from './transactionRow';
import NoTransactions from './noTransactions';
import Loading from './loading';
import withSideNav from './withSideNav';
import { transactionNavProps as navProps } from '../utils/sideNavData';


const Transactions = ({ transactions, isFetching, toggleSideNav }) => {
  const transactionRows = transactions.map((props, i) => {
    return <TransactionRow key={i} {...props} transactionType={props.transaction_type}/>
  });
  
  return (
    <div className="grid">
      <Header title="Transactions" handleMenuClick={toggleSideNav} />
      <SearchBar />
      {isFetching ? <Loading /> : null}
      {!transactionRows.length && !isFetching && <NoTransactions />}
      {!isFetching && transactionRows} 
    </div>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.array
}

export default withSideNav(Transactions, navProps);
