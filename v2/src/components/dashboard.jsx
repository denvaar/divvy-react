import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AccountContainer from '../containers/accountContainer';
import Header from './header';
import DashboardCard from './dashboardCard';

const cardData = [
  {
    title: "Accounts",
    linkTo: "/accounts",
    linkComponent: AccountContainer,
    icon: "university",
    description: "Accounts are designed to reflect your checking, savings, and credit card accounts.",
    subLinks: [
      <a key="add" className="blue-link" href="#">Add Account</a>
    ]
  },
  {
    title: "Budgets",
    linkTo: "/accounts",
    linkComponent: AccountContainer,
    icon: "book",
    description: "Use budgets to establish and define your desired spending habits.",
    subLinks: [
      <a key="add" className="blue-link" href="#">Add Budget</a>
    ]
  },
  {
    title: "Transactions",
    icon: "credit-card",
    linkTo: "/accounts",
    linkComponent: AccountContainer,
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
    linkTo: "/accounts",
    linkComponent: AccountContainer,
    description: "Reports help you visualize your spending and saving habits over time.",
    subLinks: [
      <a key="exp" className="blue-link" href="#">Export Reports</a>
    ]
  }
];


const Dashboard = () => {
  const dashboardCards = cardData.map(props => {
    return <DashboardCard key={props.title} {...props} />
  });

  return (    
    <div>
      <Header title="Dashboard" />
      <div className="grid-wrap content-centered">
        {dashboardCards}
      </div>
    </div>
  );
}

Dashboard.propTypes = { }

export default Dashboard;
