import React from 'react';
import PropTypes from 'prop-types';


const Header = ({ title, handleMenuClick, filterComponent }) => {
  return (
    <div className="grid">
      <div className="grid-row header">
        <div className="grid-item box-center focus-text-2" onClick={() => handleMenuClick()}>
          <a href="#" className="white-link">
            <i className="fa fa-bars" aria-hidden="true"></i>
          </a>
        </div>
        <div className="grid-item-3 box-center">
          <div className="focus-text-1">{title}</div>
        </div>
        <div className="grid-item box-center m-right-2">
          {filterComponent ? filterComponent : null}
        </div>
      </div>
    </div>
  );  
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  handleMenuClick: PropTypes.func,
  filterComponent: PropTypes.element
}

export default Header;
