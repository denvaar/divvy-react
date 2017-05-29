import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0
    };
  }

  handleNext() {
    if (this.state.step + 1 === this.props.components.length) {
      this.props.handleCompleted();
    } else {
      this.setState({ step: this.state.step + 1 });
    }
  }

  handlePrev() {
    const nextStep = this.state.step <= 0 ? 0 : this.state.step - 1;
    this.setState({ step: nextStep });
  }

  render() {
    const CurrentComponent = this.props.components[this.state.step];

    return (
      <CurrentComponent
        handlePrev={() => this.handlePrev()}
        handleNext={() => this.handleNext()} />
    );
  }
}

Wizard.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.func
    ])
  ).isRequired,
  handleCompleted: PropTypes.func.isRequired
};

export default Wizard;
