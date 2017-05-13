import React from 'react';
import PropTypes from 'prop-types';

import { currencyFormatter } from '../utils/utils';


const BudgetCard = ({
  title,
  icon,
  period,
  amount: currentAmount,
  goal: totalAmount
}) => {
  return (
    <div className="grid">
      <div className="grid-item budget-container">
        <div className="grid-column">
          <div className="grid-item focus-text-3 chop">
            {title}            
          </div>
          <div className="grid-item-3 box-center focus-text-0">
            <i className={`fa fa-${icon || "book"}`} aria-hidden="true"></i>
          </div>
          <div className="grid-item focus-text-6">
            <i className="fa fa-calendar" aria-hidden="true"></i>
            &nbsp;&nbsp;{period}
          </div>
          <div className="grid-item focus-text-5">
            {currencyFormatter.format(currentAmount)} of {currencyFormatter.format(totalAmount)}
          </div>
        </div>
      </div>
    </div>
  );
}

BudgetCard.propTypes = {
  title: PropTypes.string.isRequired,
  //icon: PropTypes.string.isRequired,
  //period: PropTypes.string.isRequired,
  //currentAmount: PropTypes.number.isRequired,
  //totalAmount: PropTypes.number.isRequired
}

export default BudgetCard;
