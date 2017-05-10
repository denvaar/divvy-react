import React from 'react';


export const transactionNavProps = { 
  content: [
    {   
      label: (
        <div>
          <i className="fa fa-plus" aria-hidden="true"></i>
          &nbsp;&nbsp;
          <span>Add Transaction</span>
        </div> 
      ),  
      route: "/transactions/add"
    },  
    {   
      label: (
        <div>
          <i className="fa fa-book" aria-hidden="true"></i>
          &nbsp;&nbsp;
          <span>Categorize Transactions</span>
        </div>
      ),  
      route: "/transactions/categorize"
    },  
    {   
      label: (
        <div>
          <i className="fa fa-external-link" aria-hidden="true"></i>
          &nbsp;&nbsp;
          <span>Export Transactions</span>
        </div>
      ),  
      route: "/transactions/export"
    },  
    {   
      label: (
        <div>
          <i className="fa fa-refresh" aria-hidden="true"></i>
          &nbsp;&nbsp;
          <span>Refresh</span>
        </div>
      ),  
      route: "/transactions/refresh"
    },  
  ]
}

export const accountNavProps = { 
  content: [
    {   
      label: (
        <div>
          <i className="fa fa-plus" aria-hidden="true"></i>
          &nbsp;&nbsp;
          <span>Add Account</span>
        </div> 
      ),  
      route: "/accounts/add"
    } 
  ]
}

export const budgetNavProps = { 
  content: [
    {   
      label: (
        <div>
          <i className="fa fa-plus" aria-hidden="true"></i>
          &nbsp;&nbsp;
          <span>Add Budget</span>
        </div> 
      ),  
      route: "/budgets/add"
    } 
  ]
}
