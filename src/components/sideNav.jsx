import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import onClickOutside from 'react-onclickoutside';
import { browserHistory } from 'react-router';


const getMenuItemIcon = (iconName) => {
  switch (iconName) {
    case 'accounts':
      return <i className="fa fa-university" aria-hidden="true"></i>;
    case 'budgets':
      return <i className="fa fa-envelope-o" aria-hidden="true"></i>;
    case 'transactions':
      return <i className="fa fa-exchange" aria-hidden="true"></i>;
    default:
      return '?';
  }
};

const Div = (props) => {
  const {
    children,
    handleClickOutside,
    disableOnClickOutside,
    enableOnClickOutside,
    ...rest
  } = props;
  return <div {...rest}>{children}</div>
}

const ClickDiv = onClickOutside(Div);

export default class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      hoverMenuItem: null
    };
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleItemMouseOver = this.handleItemMouseOver.bind(this);
  }

  handleItemClick(route) {
    this.setState({
      visible: !this.state.visible
    });
    browserHistory.push(route);
  }

  handleItemMouseOver(label) {
    this.setState({
      hoverMenuItem: label
    });
  }

  render() {
    let menu = this.state.visible ? (
      <ClickDiv className="sidenav-container"
                key={"menu-1"}
                handleClickOutside={() => this.setState({visible: !this.state.visible})}>
        {(() => {
          return this.props.menuItems.map(item => {
            let label = item.label.toLowerCase();
            return (
              <div key={item.label}
                    onMouseOver={() => this.handleItemMouseOver(label)}
                    onClick={() => this.handleItemClick(item.route)}>
                {item.label}
              </div>
            );
          });
        })()}
      </ClickDiv>
    ) : null;
    
    return (
      <div>
        <i className="menu-icon fa fa-bars"
           aria-hidden="true"
           style={{marginLeft: -8+"px"}}
           onClick={() => this.setState({visible: !this.state.visible})} />
        <ReactCSSTransitionGroup
           transitionName="sidemenu"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={900}>
          {menu}
        </ReactCSSTransitionGroup>
        {this.state.visible ? 
          <div className="sidenav--outside">{getMenuItemIcon(this.state.hoverMenuItem)}</div>
          : null
        }
      </div>
    );
  }

}
