import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SideNav = ({ toggleVisibility }) => {
  return (
    <div>
      <div className="sidenav-container">
        <div className="grid">
          <div className="grid-column">
            <div className="grid-item profile-container">
        
              <div className="grid">
                <div className="grid-row m-top-1">
                  <div className="grid-item align-left m-left-1">
                    <i className="fa fa-cogs" aria-hidden="true"></i>
                    <span>Settings</span>
                  </div>
                  <div className="grid-item right-align m-right-1">
                    <i className="fa fa-user" aria-hidden="true"></i>
                    <span>Logout</span>
                  </div>
                </div>
                <div className="grid-row nav-bottom-content">
                  <div className="grid-item text-bottom focus-text-5 right-align m-right-1">
                    Denver Smith<br/>
                    denverpsmith@gmail.com
                  </div>
                </div>
              </div>
        
              <div className="focus-text-5">
              </div>
            </div>
            <div className="grid-item sidenav-row-item box-center left-align p-left-2 list-item-clickable">
              <div>
                <i className="fa fa-plus" aria-hidden="true"></i>
                <span>Add Transaction</span>
              </div>
            </div>
            <div className="grid-item sidenav-row-item box-center left-align p-left-2 list-item-clickable">
              <div>
                <i className="fa fa-book" aria-hidden="true"></i>
                <span>Categorize Transactions</span>
              </div>
            </div>
            <div className="grid-item sidenav-row-item box-center left-align p-left-2 list-item-clickable">
              <div>
                <i className="fa fa-external-link" aria-hidden="true"></i>
                <span>Export Transactions</span>
              </div>
            </div>
            <div className="grid-item sidenav-row-item box-center left-align p-left-2 list-item-clickable">
              <div>
                <i className="fa fa-refresh" aria-hidden="true"></i>
                <span>Refresh</span>
              </div>
            </div>

            <Link to="/dashboard" className="sticky-bottom sidenav-footer box-center green-2-bg white-1">
              <div className="grid">
                <div className="grid-row">
                  <div className="grid-item box-center focus-text-1">
                    <i className="fa fa-home" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </Link>
        
          </div>
        </div>
      </div>
      <div className="sidenav-overlay" onClick={() => toggleVisibility()}></div>
    </div>
  );
}

SideNav.propTypes = {
}

export default SideNav;
