import React from 'react';

import Table from './table';


const tableColumns = [
  {'title': 'Date', 'dataKey': 'date'},
  {'title': 'Amount', 'dataKey': 'amount'},
  {'title': 'Type', 'dataKey': 'type'},
  {'title': 'Name', 'dataKey': 'name'},
  {'title': 'Budget', 'dataKey': 'budget'},
]

const TransactionList = ({ rows }) => {
  return (
    <div>
      <h3><i className="fa fa-exchange" aria-hidden="true"></i> Transactions</h3>
      <div className="page">
        <Table className="table-1" columns={tableColumns} rows={rows} />
      </div>
      <span className="fake-link">See more...</span>
    </div> 
  );
}

export default TransactionList;
