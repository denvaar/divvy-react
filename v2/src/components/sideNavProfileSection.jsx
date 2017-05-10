import React from 'react';
import PropTypes from 'prop-types';


const SideNavProfileSection = ({ userName, handleLogout }) => {
  return (
    <div className="grid-item profile-container">
      <div className="grid">
        <div className="grid-row m-top-1">
          <div className="grid-item align-left m-left-1">
            <div className="inline-button">
              <i className="fa fa-cogs" aria-hidden="true"></i>
              &nbsp;&nbsp;Settings
            </div>
          </div>
          <div className="grid-item right-align m-right-1">
            <div onClick={() => handleLogout()} className="inline-button">
              <i className="fa fa-sign-out" aria-hidden="true"></i>
              &nbsp;&nbsp;Logout
            </div>
          </div>
        </div>
        <div className="grid-row nav-bottom-content">
          <div className="grid-item text-bottom focus-text-5 right-align m-right-1">
            <i className="fa fa-user" aria-hidden="true"></i>
            &nbsp;&nbsp;
            {userName}<br/>
            denverpsmith@gmail.com
          </div>
        </div>
      </div>
      <div className="focus-text-5">
      </div>
    </div> 
  );
}

SideNavProfileSection.propTypes = {
}

export default SideNavProfileSection;
