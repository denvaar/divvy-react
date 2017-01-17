import React from 'react';

import Table from './table';


const AccountList = ({ rows }) => {
  
  let total = 0.0;
  for (let obj of rows) {
    total += obj.accountBalance;
  }

  return (
    <div className="account-container">
      <Table className="table-2" columns={[
        {title: '', dataKey: 'accountName'},
        {title: '', dataKey: 'accountBalance'},
      ]} rows={rows} />
      <b>Total: <span style={{float: 'right'}}>{total}</span></b>
    </div>
  );
}

export default AccountList;
