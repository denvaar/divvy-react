import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';


const Accounts = () => {
  return (
    <div className="grid">
      <Header title="Accounts" />
      <div className="grid-row list-alternate-color">
        <div className="grid-item">
          <div className="list-item-container list-item-clickable box-center">
            <div className="grid">
              <div className="grid-row">
                <div className="grid-item list-item-icon box-center left-align m-left-2">
                  <i className="fa fa-university" aria-hidden="true"></i>
                </div>
                <div className="grid-item-3 box-center left-align">
                  Zions Simple Checking
                </div>
                <div className="grid-item-2 box-center right-align m-right-2">
                  $3,000.66
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-row list-alternate-color">
        <div className="grid-item">
          <div className="list-item-container list-item-clickable box-center">
            <div className="grid">
              <div className="grid-row">
                <div className="grid-item list-item-icon box-center left-align m-left-2">
                  <i className="fa fa-university" aria-hidden="true"></i>
                </div>
                <div className="grid-item-3 box-center left-align">
                  Zions Checking Plus
                </div>
                <div className="grid-item-2 box-center right-align m-right-2">
                  $32,000.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-row list-alternate-color">
        <div className="grid-item">
          <div className="list-item-container list-item-clickable box-center">
            <div className="grid">
              <div className="grid-row">
                <div className="grid-item list-item-icon box-center left-align m-left-2">
                  <i className="fa fa-university" aria-hidden="true"></i>
                </div>
                <div className="grid-item-3 box-center left-align">
                  Secret Hedge Fund
                </div>
                <div className="grid-item-2 box-center right-align m-right-2">
                  $600,000.00
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid-row green-1-bg white-1 sticky-bottom">
        <div className="grid-item">
          <div className="list-item-container box-center">
            <div className="grid">
              <div className="grid-row">
                <div className="grid-item box-center">
                  Total Balance:
                </div>
                <div className="grid-item box-center right-align m-right-2">
                  $635,000.66
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

Accounts.propTypes = {
}

export default Accounts;
