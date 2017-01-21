import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestToken, fetchUser } from '../actions/authActions';


class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    event.preventDefault();
    this.props.onLoginSubmit({username: this.refs.username.value, password: this.refs.password.value});
  }

  render() {
    return (
      <div className="login-form-container">
        <form>
          <div className="input-group">
            <input type='text' ref='username' placeholder='Username' />
          </div> 
          <div className="input-group"> 
            <input type='password' ref='password' placeholder='Password' />
          </div> 
          <div className="input-group"> 
            <input
              type="submit"
              className="submit-button" 
              value="Sign in"
              onClick={(event) => this.handleClick(event)} />
          </div> 
        </form>
        <a href="#" className="fake-link">Forgot password</a>
        &nbsp;<span style={{color: "#ddd"}}>|</span>&nbsp;
        <a href="#" className="fake-link">Create an account</a>
        <div className="form-error">{this.props.errors}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.authReducer.errors
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginSubmit: (creds) => {
      dispatch(requestToken(creds));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
