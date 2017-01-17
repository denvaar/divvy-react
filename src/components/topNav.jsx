import React from 'react';


const TopNav = (props) => {
  return (
    <div>
      <div className="header">
        <span className="logo">Divvy</span>
        <span className="user">
          <i className="fa fa-cogs fake-link" aria-hidden="true"></i>
          &nbsp;&nbsp;|&nbsp;&nbsp;Denver | <span className="fake-link">logout</span>          </span>
      </div>
      {props.children}
    </div>
  ); 
}

export default TopNav;
