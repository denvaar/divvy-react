import React from 'react';
import PropTypes from 'prop-types';

import { currencyFormatter, formatDate } from '../utils/utils';


const TransactionRow = ({
  name,
  icon,
  type,
  amount,
  created
}) => {
  return (
    <div className="grid-row list-alternate-color">
      <div className="grid-item">
        <div className="list-item-container list-item-clickable box-center">
          <div className="grid">
            <div className="grid-row">
              <div className="grid-item list-item-icon box-center left-align m-left-2">
                <i className={`fa fa-${icon || "credit-card"}`} aria-hidden="true"></i>
              </div>
              <div className="grid-item-2">
                <div>
                  <span>{name}</span>
                  <span className="red-1">{currencyFormatter.format(amount)}</span>
                </div>
                <div className="focus-text-6">{type}</div>
              </div>
              <div className="grid-item right-align m-right-2">
                <div className="focus-text-6">{formatDate(created)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  );
}

TransactionRow.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  created: PropTypes.string.isRequired
}

export default TransactionRow;
