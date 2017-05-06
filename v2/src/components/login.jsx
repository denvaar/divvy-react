import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ handleLogin, errors }) => {
  let email, password;
  return (
    <div className="vertical-focus blue-1-bg">
      <div className="x5">
          <div className="cloud"></div>
      </div>
      <div className="x2">
          <div className="cloud"></div>
      </div>
      <div className="x4">
          <div className="cloud"></div>
      </div>
      <div className="grid login-container">
        <div className="grid-row">
          <div className="grid-item box-center">
            <h2>Sign in</h2>
            {errors ? <div className="pb-1 red-1 text-center">{errors.formErrors}</div> : null}
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item">
            <label className="form-label">Email</label>
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item">
            <input
              className="input form-input"
              type="text"
              placeholder="Email"
              ref={el => email = el} />
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item">
            <label className="form-label">Password</label>
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item">
            <input
              className="input form-input"
              type="password"
              placeholder="Password"
              ref={el => password = el} />
          </div>
        </div>
        <div className="grid-row">
          <div className="grid-item">
            <button
              className="button form-button green-3-bg white-1"
              onClick={() => handleLogin(email.value, password.value)}>Sign in</button>
          </div>
        </div>
        <div className="row">
          <div className="grid-item text-center">
            <a className="blue-link focus-text-6" href="#">Don't have an account?</a>
            &nbsp;&nbsp;
            <a className="blue-link focus-text-6" href="#">Forgot password?</a>
          </div>
        </div>
      </div>
    </div> 
  );
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  errors: PropTypes.object
}

export default Login;
