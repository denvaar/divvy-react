import React from 'react';
import PropTypes from 'prop-types';

import { currencyFormatter, formatDate } from '../utils/utils';


const TransactionRow = ({
  name,
  icon,
  transactionType,
  amount,
  created,
  categorized
}) => {
  return (
    <div className="grid-row list-alternate-color">
      <div className="grid-item">
        <div className="list-item-container list-item-clickable box-center p-1">
          <div className="grid">
            <div className="grid-row">
              <div className="grid-item list-item-icon box-center left-align m-left-2">
                {!categorized ? <i className={`fa fa-tags focus-text-6`} aria-hidden="true"></i> : null}
              </div>
              <div className="grid-item-2">
                <div>
                  <span className="focus-text-5">{name}</span>
                </div>
                <div>
                  <span className={transactionType === "Debit" ? "red-1" : "green-3"}>{currencyFormatter.format(amount)}</span>
                </div>
                <div className="focus-text-6">{transactionType}</div>
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
  //name: PropTypes.string.isRequired,
  //icon: PropTypes.string.isRequired,
  //type: PropTypes.string.isRequired,
  //amount: PropTypes.number.isRequired,
  //created: PropTypes.string.isRequired
}

export default TransactionRow;
