import axios from 'axios';
import { browserHistory } from 'react-router';

import storage from '../utils/localStorageUtils';
import apiBase from '../utils/apiConfigUtils';


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const USER_RETRIEVED = 'USER_RETRIEVED';

export const requestToken = (props) => {
  return dispatch => {
    return axios.post(`${apiBase}/accounts/sessions`, props).then(response => {
      if (response.status === 201) {
        storage.setKey(response.data.jwt);
        dispatch(loginSuccess());
        browserHistory.push('/accounts');
      } else {

        console.log('here')
        dispatch(loginFailure(response));
      }
    }).catch(error => {
      dispatch(loginFailure(error));
    });
  }
}

/* Browser has a token, but not logged in (page refresh, etc.) */
export const fetchUser = (token) => {
  return dispatch => {
    const config = {
      headers: {
        'Authorization': `JWT ${token}`
      }
    };
    return axios.get(`${apiBase}/accounts/users/retrieve`, config).then(response => {
      const jwt = response.data.jwt;
      dispatch(userRetrieved(response));
    });
  }
}

const loginSuccess = () => {
  return {type: LOGIN_SUCCESS};
}

const loginFailure = (error) => {
  // TODO do something with error
  console.log(error.response.data.errors)
  return {
    type: LOGIN_FAILURE,
    errors: Object.values(error.response.data.errors)
  };
}

const userRetrieved = (response) => {
  console.log(response);
  return {type: USER_RETRIEVED};
}
