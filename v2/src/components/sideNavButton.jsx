import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SideNavButton = ({ label, route }) => {
  return (
    <Link to={route} className="grid-item sidenav-row-item box-center left-align p-left-2 list-item-clickable">
      {label}
    </Link> 
  );
}

SideNavButton.propTypes = {
  label: PropTypes.element.isRequired,
  route: PropTypes.string.isRequired
}

export default SideNavButton;
