import React, { Component } from 'react';

import TransactionList from '../components/transactionList';


const rows = [
  {
    'date': '2017-01-01',
    'amount': '$20.00',
    'type': 'Debit',
    'name': 'Sunrise Cyclery',
    'budget': 'Bikes',
  },
  {
    'date': '2017-01-02',
    'amount': '$2.98',
    'type': 'Debit',
    'name': 'Charlee\'s Ice Cream',
    'budget': 'Food',
  },
  {
    'date': '2017-01-02',
    'amount': '$10.35',
    'type': 'Debit',
    'name': 'Pizza Hut',
    'budget': 'Food',
  },
  {
    'date': '2017-01-03',
    'amount': '$100.00',
    'type': 'Credit',
    'name': 'Transfer',
    'budget': '--',
  },
];

export default class Transactions extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TransactionList rows={rows} />
    );
  }
}
