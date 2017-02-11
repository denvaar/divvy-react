import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';

import apiBase from '../utils/apiConfigUtils';
import storage from '../utils/localStorageUtils';

/* TODO rename this */
class AccountDetailForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      fi: '',
      userid: '',
      userpass: '',
      acctid: '',
      label: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onFieldChange = this.onFieldChange.bind(this);
  }
 
  onSubmit(event) {
    event.preventDefault();
    const token = storage.get('auth-token');
    const config = {
      headers: {
        'Authorization': `JWT ${token}`
      }
    };
    const data = {
      name: this.state.label,
      fi: this.state.fi,
      userid: this.state.userid,
      userpass: this.state.userpass,
      acctid: this.state.acctid
    };
    axios.post(`${apiBase}/accounts/account-create`, data, config).then(response => {
      browserHistory.push('/accounts');
    }).catch(error => {

    });
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group">
          <label>Financial Institution</label>
          <input type="text" placeholder="Financial Institution" name="fi" onChange={this.onFieldChange} />
        </div>
        <div className="input-group">
          <label>User ID</label>
          <input type="text" placeholder="User ID" name="userid" onChange={this.onFieldChange} />
        </div>
        <div className="input-group">
          <label>User Password</label>
          <input type="password" placeholder="User Password" name="userpass" onChange={this.onFieldChange} />
        </div>
        <div className="input-group">
          <label>Account ID</label>
          <input type="text" placeholder="Account ID" name="acctid" onChange={this.onFieldChange} />
        </div>
        <div className="input-group">
          <label>Label</label>
          <input type="text" placeholder="Label" name="label" onChange={this.onFieldChange} />
        </div>
        <div className="input-group">
          <input type="button" value="Cancel" onClick={() => {browserHistory.push('/accounts')}} />
        </div>
        <div className="input-group">
          <input type="submit" value="Create Account" />
        </div>
      </form>
    );
  }
}

export default AccountDetailForm;
