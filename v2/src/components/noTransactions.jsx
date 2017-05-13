import React from 'react';
import { Link } from 'react-router-dom';


const NoTransactions = () => (
  <div className="grid p-5">
    <div className="grid-row box-center focus-text-2">
      No transactions
    </div>
    <div className="grid-row box-center focus-text-5">
      <p>Divvy will automatically add transactions for you if you configure your <Link to="/accounts/add" className="blue-link">accounts</Link>.<br />You can also choose to <Link className="blue-link" to="/transactions/add">add transactions manually</Link>.</p>
    </div>
  </div> 
)

export default NoTransactions;
