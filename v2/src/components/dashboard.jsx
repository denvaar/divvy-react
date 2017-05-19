import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AccountContainer from '../containers/accountContainer';
import Header from './header';
import DashboardCard from './dashboardCard';
import withSideNav from './withSideNav';


const cardData = [
  {
    title: "Accounts",
    linkTo: "/accounts",
    icon: "university",
    description: "Accounts are designed to reflect your checking, savings, and credit card accounts.",
    subLinks: [
      <a key="add" className="blue-link" href="#">Add Account</a>
    ]
  },
  {
    title: "Budgets",
    linkTo: "/budgets",
    icon: "book",
    description: "Use budgets to establish and define your desired spending habits.",
    subLinks: [
      <a key="add" className="blue-link" href="#">Add Budget</a>
    ]
  },
  {
    title: "Transactions",
    icon: "credit-card",
    linkTo: "/transactions",
    description: "View and categorize your transaction history",
    subLinks: [
      <a key="add" className="blue-link" href="#">Add Transaction</a>,
      <a key="cat" className="blue-link" href="#">Categorize Transactions</a>,
      <a key="exp" className="blue-link" href="#">Export Transactions</a>
    ]
  },
  {
    title: "Reports",
    icon: "pie-chart",
    linkTo: "/reports",
    description: "Reports help you visualize your spending and saving habits over time.",
    subLinks: [
      <a key="exp" className="blue-link" href="#">Export Reports</a>
    ]
  }
];


const Dashboard = ({ toggleSideNav }) => {
  const dashboardCards = cardData.map(props => {
    return <DashboardCard key={props.title} {...props} />
  });

  return (    
    <div>
      <Header title="Dashboard" handleMenuClick={toggleSideNav} />
      <div className="grid-wrap content-centered pt-2">
        {dashboardCards}
      </div>
    </div>
  );
}

Dashboard.propTypes = { }

export default withSideNav(Dashboard, []);
