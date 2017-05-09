import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import SearchBar from './searchBar';
import BudgetCard from './budgetCard';


const budgetData = [
  {
    title: "House Savings",
    icon: "home",
    period: "Monthly",
    currentAmount: 0,
    totalAmount: 1000
  },
  {
    title: "Travel",
    icon: "plane",
    period: "Yearly",
    currentAmount: 0,
    totalAmount: 500
  },
  {
    title: "Groceries",
    icon: "cutlery",
    period: "Monthly",
    currentAmount: 200.66,
    totalAmount: 250
  },
  {
    title: "Bike Stuff",
    icon: "bicycle",
    period: "Monthly",
    currentAmount: 63.70,
    totalAmount: 50
  },
];

const Budgets = () => {
  const budgetCards = budgetData.map(budget => {
    return <BudgetCard key={budget.title} {...budget} />
  });

  return (
    <div>
      <Header title="Budgets" />
      <SearchBar />
      <div className="grid-wrap content-centered">
        {budgetCards}
      </div>
    </div>
  );
}

Budgets.propTypes = {
}

export default Budgets;
