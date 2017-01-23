import React, { Component } from 'react';
import { connect } from 'react-redux';

import { requestToken, fetchUser } from '../actions/authActions';


class LoginForm extends Component {
  constructor(props) {
    super(props);
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
              onClick={(event) => this.props.onSubmit(event, this.refs.username.value, this.refs.password.value)} />
          </div> 
        </form>
        <a href="#" className="fake-link">Forgot password</a>
        &nbsp;<span style={{color: "#ddd"}}>|</span>&nbsp;
        <a href="#"
           className="fake-link"
           onClick={this.props.onAccountCreate}>
          Create an account
        </a>
        <div className="form-error">{this.props.errors}</div>
      </div>

    );
  }
}

class AccountCreateForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="create-account-form-container">
        <form>
          <div className="input-group">
            <input type='text' ref='firstName' placeholder='First Name' />
          </div> 
          <div className="input-group">
            <input type='text' ref='lastName' placeholder='Last Name' />
          </div> 
          <div className="input-group">
            <input type='text' ref='username' placeholder='Username' />
          </div> 
          <div className="input-group"> 
            <input type='password' ref='password' placeholder='Password' />
          </div> 
          <div className="input-group"> 
            <input type='password' ref='passwordConfirm' placeholder='Confirm password' />
          </div> 
          <div className="input-group"> 
            <input
              type="submit"
              className="submit-button" 
              value="Create Account"
              onClick={this.props.onSubmit} />
          </div> 
        </form>
        <div className="form-error">{this.props.errors}</div>
      </div>
    );
  }
}


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      create: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event, username, password) {
    event.preventDefault();
    this.props.onLoginSubmit({username: username, password: password});
  }

  render() {
    return (
      <div>
        {!this.state.create ? 
          <LoginForm
            onSubmit={this.handleClick}
            onAccountCreate={() => this.setState({create: true })}
            errors={this.props.errors} />
          :
          <AccountCreateForm
            onSubmit={() => console.log('create account')} />
        }
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
