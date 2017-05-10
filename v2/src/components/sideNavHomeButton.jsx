import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SideNavHomeButton = () => {
  return (
    <Link to="/dashboard" className="sticky-bottom sidenav-footer box-center green-2-bg white-1">
      <div className="grid">
        <div className="grid-row">
          <div className="grid-item box-center focus-text-1">
            <i className="fa fa-home" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </Link> 
  );
}

export default SideNavHomeButton;
