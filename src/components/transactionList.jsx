import React, { Component } from 'react';

import { formatDate } from 'utils/utils';

//import Table from './table';


const TransactionCategorizer = ({
  budgets,
  transactions,
  updateTransaction,
  categorizeTransaction
}) => {
  
  let selectedBudget;

  return (
    <div>
      {(() => {
        if (transactions.length > 0) {
          return (
            <div>
              <div className="notification">{transactions.length}</div>
              <div style={{width: "200px", boxShadow: "0 1px 10px #888888", margin: "5px"}}>
                <div className="card">
                  <div className="info-text date-text">{formatDate(transactions[0].date)}</div>
                  <div className="info-text title-text">{transactions[0].name}</div>
                  <div className="info-text amount-text">${transactions[0].amount}</div>
                  <div className="info-text type-text">{transactions[0].type}</div>
                </div>
                <div>
                  <select className="select" ref={el => selectedBudget = el}>
                    {budgets.map(b => <option key={b.id} value={b.id}>{b.title}</option>)}
                  </select>
                  <button
                    className="btn card-button"
                    style={{color: "#c8e7ff", background: "#0090ff"}}
                    onClick={() => categorizeTransaction(transactions[0].id, { amount: transactions[0].amount, transaction: transactions[0].id, budget: selectedBudget.options[selectedBudget.selectedIndex].value  })}>
                    <div>
                      <i className="fa fa-2x fa-pie-chart"></i> <span>Categorize</span>
                    </div>
                  </button>
                  <button
                    className="btn card-button"
                    style={{color: "#99afba", background: "#3d5e6e"}}
                    onClick={() => updateTransaction(transactions[0].id, { ignore: true })}>
                    <div>
                      <i className="fa fa-2x fa-eye-slash"></i> <span>Ignore</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return <p>You're all caught up!</p>
        }
      })()}
    </div>

  );
}




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

//export default TransactionList;
export default TransactionCategorizer;
