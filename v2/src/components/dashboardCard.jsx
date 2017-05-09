import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const DashboardCard = ({
  title,
  linkTo,
  linkComponent,
  icon,
  description,
  subLinks
}) => {
  return (
    <div className="grid">
      <div className="grid-item dashboard-item-container">
        <div className="grid-row">
          <Link to={linkTo}
                className="grid-item focus-text-2 box-center dashboard-item-clickable grey-link">
            <div className="focus-text-0">
              <i className={`fa fa-${icon}`} aria-hidden="true"></i>
            </div>
            {title}
          </Link>
          <div className="grid-item box-center left-align focus-text-5">
            <div className="border-bottom-1">
              {description}
            </div>
            {subLinks}
          </div>
        </div>
      </div>
    </div> 
  );  
}

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  linkTo: PropTypes.string.isRequired,
  linkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func
  ]).isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string,
  subLinks: PropTypes.arrayOf(
    PropTypes.element
  )
}

export default DashboardCard;
