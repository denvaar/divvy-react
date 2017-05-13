import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import SearchBar from './searchBar';
import BudgetCard from './budgetCard';
import withSideNav from './withSideNav';
import { budgetNavProps as navProps } from '../utils/sideNavData';



const Budgets = ({ budgets, toggleSideNav }) => {
  const budgetCards = budgets.map(budget => {
    return <BudgetCard key={budget.title} {...budget} />
  });

  return (
    <div>
      <Header title="Budgets" handleMenuClick={toggleSideNav} />
      <SearchBar />
      <div className="grid-wrap content-centered">
        {budgetCards}
      </div>
    </div>
  );
}

Budgets.propTypes = {
  budgets: PropTypes.array
}

export default withSideNav(Budgets, navProps);
