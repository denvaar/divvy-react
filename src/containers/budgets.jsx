import React, { Component } from 'react';

import BudgetList from '../components/budgetList';


const budgets = [
  {
    id: 1,
    title: 'Groceries',
    icon: 'fa-file-text-o',
    description: 'A budget for food and stuff',
  },
  {
    id: 2,
    title: 'Travel Fund',
    icon: 'fa-car',
    description: 'To save for a fun trip',
  },
];


export default class Budgets extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h3><i className="fa fa-envelope-o" aria-hidden="true"></i> Budgets</h3>
        <div className="toolbar">
          <span className="fake-link"><i className="fa fa-plus" aria-hidden="true"></i> New Budget</span>
          <span className="fake-link"><i className="fa fa-times" aria-hidden="true"></i> Remove Budget</span>
        </div>
        <BudgetList budgets={budgets} />
      </div>
    );
  }
}
