import React from 'react';

const budgetCards = (budgets) => {
  return budgets.map(budget => {
    return (
      <div className="budget-container" key={budget.id}>
        <i className={`fa fa-4x ${budget.icon}`} aria-hidden="true"></i>
        <div className="budget-label">
          <h4>{budget.title}</h4>
          <p>{budget.description}</p>
        </div>
      </div>
    );
  });
}

const BudgetList = ({ budgets }) => {
  return (  
    <div>
      {budgetCards(budgets)}
    </div>
  );
}

export default BudgetList;
