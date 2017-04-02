import React, { Component } from 'react';

import Table from './table';


const tableColumns = [
  {'title': 'Date', 'dataKey': 'date'},
  {'title': 'Amount', 'dataKey': 'amount'},
  {'title': 'Type', 'dataKey': 'type'},
  {'title': 'Name', 'dataKey': 'name'},
  {'title': 'Budget', 'dataKey': 'budget'},
]

const card = {
  background: "#fff",
  padding: "5px",
  height: "180px",
  textAlign: "center",
  fontSize: "10px"
};


const cardButton = {
  width: "100%",
  textTransform: "uppercase",
  borderRadius: "0",
  height: "40px"
};

class TransactionCategorizer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      transactions: [] 
    };
  }
 
  componentWillReceiveProps(nextProps) {
    if (nextProps.transactions) {
      this.setState({ transactions: nextProps.transactions });
    }
  }

  render() {
    return (
      <div>
        {(() => {
          if (this.state.transactions.length > 0) {
            return (
              <div>
                <div>{this.state.transactions.length}</div>
                <div style={{width: "200px", boxShadow: "0 1px 10px #888888", margin: "5px"}}>
                  <div style={card}>
                    <div>{this.state.transactions[0].date}</div>
                    <div>{this.state.transactions[0].name}</div>
                    <div>{this.state.transactions[0].type}</div>
                    <div>${this.state.transactions[0].amount}</div>
                  </div>
                  <div>
                    <button
                      className="btn"
                      style={{...cardButton, color: "#c8e7ff", background: "#0090ff"}}>
                      Categorize
                    </button>
                    <button
                      className="btn"
                      style={{...cardButton, color: "#99afba", background: "#3d5e6e"}}
                      onClick={() => this.props.updateTransaction(this.state.transactions[0].id, { ignore: true })}>
                      Ignore
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
}


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
