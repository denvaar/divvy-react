import React from 'react';
import PropTypes from 'prop-types';

import { currencyFormatter } from '../utils/utils';
import Header from './header';
import withSideNav from './withSideNav';
import { accountNavProps as navProps } from '../utils/sideNavData';
import AccountRow from './accountRow';


const Accounts = ({ bankAccounts, toggleSideNav }) => {
  const accounts = bankAccounts.map((props, i) => (
    <AccountRow key={i} {...props} />
  ));
  const totalBalance = bankAccounts.reduce((acc, obj) => acc + obj.balance, 0);

  return (
    <div className="grid">
      <Header title="Accounts" handleMenuClick={toggleSideNav} />
      {accounts}
      <div className="grid-row green-1-bg white-1 sticky-bottom">
        <div className="grid-item">
          <div className="list-item-container box-center">
            <div className="grid">
              <div className="grid-row">
                <div className="grid-item box-center">
                  Total Balance:
                </div>
                <div className="grid-item box-center right-align m-right-2">
                  {currencyFormatter.format(totalBalance)}
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
  bankAccounts: PropTypes.array
}

export default withSideNav(Accounts, navProps);
