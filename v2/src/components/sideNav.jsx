import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import SideNavProfileSection from './sideNavProfileSection';
import SideNavButton from './sideNavButton';
import SideNavHomeButton from './sideNavHomeButton';


const SideNav = ({ toggleVisibility, profileProps, content = [] }) => {
  const sideNavButtons = content.map((props, i) => (
    <SideNavButton key={i} {...props} />
  ));
  
  document.documentElement.style.overflow = 'hidden';

  return (
    <div>
      <div className="sidenav-container">
        <div className="grid">
          <div className="grid-column">
            <SideNavProfileSection {...profileProps} />
            {sideNavButtons}
            <SideNavHomeButton />
          </div>
        </div>
      </div>
      <div className="sidenav-overlay" onClick={() => {
          document.documentElement.style.overflow = '';
          toggleVisibility()
        }}>
      </div>
    </div>
  );
}

SideNav.propTypes = {
  toggleVisibility: PropTypes.func.isRequired,
  content: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.element.isRequired,
      route: PropTypes.string.isRequired
    })
  )
}

export default SideNav;
