import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import SearchBar from './searchBar';
import TransactionRow from './transactionRow';
import NoTransactions from './noTransactions';
import Loading from './loading';
import withSideNav from './withSideNav';
import { transactionNavProps as navProps } from '../utils/sideNavData';


const filterComponent = (filterFunction, currentFilter) => ( 
  <select onChange={(e) => filterFunction(e.target.value)} value={currentFilter}>
    <option value="all">All</option>
    <option value="uncategorized">Uncategorized</option>
    <option value="categorized">Categorized</option>
  </select>
);

const Transactions = ({ transactions, isFetching, toggleSideNav, filterFunction, currentFilter }) => {
  const transactionRows = transactions.map((props, i) => {
    return <TransactionRow key={i} {...props} transactionType={props.transaction_type}/>
  });
  
  return (
    <div className="grid">
      <Header
        title="Transactions"
        handleMenuClick={toggleSideNav}
        filterComponent={filterComponent(filterFunction, currentFilter)} />
      <SearchBar />
      {isFetching ? <Loading /> : null}
      {!transactionRows.length && !isFetching && <NoTransactions />}
      {!isFetching && transactionRows} 
    </div>
  );
}

Transactions.propTypes = {
  transactions: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  toggleSideNav: PropTypes.func.isRequired,
  filterFunction: PropTypes.func
}

export default withSideNav(Transactions, navProps);
