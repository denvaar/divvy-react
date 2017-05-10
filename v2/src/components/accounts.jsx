import React from 'react';
import PropTypes from 'prop-types';

import Header from './header';
import withSideNav from './withSideNav';
import { accountNavProps as navProps } from '../utils/sideNavData';
import AccountRow from './accountRow';


const accountData = [
  {
    name: 'Zions Simple Checking',
    balance: 3000.66
  },
  {
    name: 'Zions Checking Plus',
    balance: 32000.00
  },
  {
    name: 'Secret Hedge Fund',
    balance: 600000.00
  },
];

const Accounts = ({ toggleSideNav }) => {
  const accounts = accountData.map((props, i) => (
    <AccountRow key={i} {...props} />
  ));
  const totalBalance = accountData.reduce((acc, obj) => acc + obj.balance, 0);

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
                  ${totalBalance}
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

export default withSideNav(Accounts, navProps);
