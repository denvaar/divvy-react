import React from 'react';
import PropTypes from 'prop-types';


const AccountRow = ({
  name,
  balance,
}) => {
  return (
    <div className="grid-row list-alternate-color">
      <div className="grid-item">
        <div className="list-item-container list-item-clickable box-center">
          <div className="grid">
            <div className="grid-row">
              <div className="grid-item list-item-icon box-center left-align m-left-2">
                <i className="fa fa-university" aria-hidden="true"></i>
              </div>
              <div className="grid-item-3 box-center left-align">
                {name}
              </div>
              <div className="grid-item-2 box-center right-align m-right-2">
                ${balance}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

AccountRow.propTypes = {
  name: PropTypes.string.isRequired,
  balance: PropTypes.number.isRequired,
}

export default AccountRow;
