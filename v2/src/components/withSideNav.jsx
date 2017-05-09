import React, { Component } from 'react';

import SideNav from './sideNav';


const withSideNav = (WrappedComponent) => (
  class extends Component {
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

      return (
        <div>
          {showSideNav ? <SideNav toggleVisibility={this.toggleSideNav} /> : null}
          <WrappedComponent {...this.props} {...newProps} />
        </div>
      );
    }
  }
)

export default withSideNav;
