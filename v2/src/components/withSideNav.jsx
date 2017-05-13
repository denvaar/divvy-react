import React, { Component } from 'react';
import { connect } from 'react-redux';

import SideNav from './sideNav';
import { logout } from '../actions/authActions';


const mapStateToProps = (state) => (
  {
    name: state.authReducer.name,
    email: state.authReducer.email
  }
)

const mapDispatchToProps = (dispatch) => (
  {
    handleLogout: () => dispatch(logout())
  }
)

const withSideNav = (WrappedComponent, sideNavProps) => {
  class C extends Component {
    constructor(props) {
      super(props);
      this.state = {
        showSideNav: false
      };
      this.toggleSideNav = this.toggleSideNav.bind(this);
    }

    toggleSideNav() {
      this.setState({
        showSideNav: !this.state.showSideNav
      });
    }

    render() {
      const { showSideNav } = this.state;
      const newProps = {
        toggleSideNav: this.toggleSideNav
      };
      const profileProps = {
        userName: this.props.name,
        email: this.props.email,
        handleLogout: this.props.handleLogout
      };

      return (
        <div>
          {showSideNav ?
            <SideNav
              toggleVisibility={this.toggleSideNav}
              profileProps={profileProps}
              {...sideNavProps} />
            :
            null
          }
          <WrappedComponent {...this.props} {...newProps} />
        </div>
      );
    }
  }
  return connect(mapStateToProps, mapDispatchToProps)(C)
}


export default withSideNav;
