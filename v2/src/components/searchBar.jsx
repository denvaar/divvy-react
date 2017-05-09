import React from 'react';
import PropTypes from 'prop-types';


const SearchBar = () => {
  return (
    <div className="grid">
      <div className="grid-row">
        <div className="grid-item">
          <input className="input search" type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
}

export default SearchBar;
