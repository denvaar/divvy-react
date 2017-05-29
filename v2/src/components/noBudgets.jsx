import React from 'react';
import { Link } from 'react-router-dom';


const NoBudgets = () => (
  <div className="grid p-5">
    <div className="grid-row box-center focus-text-2">
      No budgets have been created.
    </div>
    <div className="grid-row box-center focus-text-5">
      <p>You can create a new budget <Link to="/budgets/new" className="blue-link">right here</Link>.</p>
    </div>
  </div> 
)

export default NoBudgets;
