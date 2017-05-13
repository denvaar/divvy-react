import axios from 'axios';
import { browserHistory } from 'react-router';

import storage from '../utils/localStorageUtils';
import apiBase from '../utils/apiConfigUtils';

export const AUTH_PENDING = 'AUTH_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const USER_RETRIEVED = 'USER_RETRIEVED';
export const USER_CREATION_FAILURE = 'USER_CREATION_FAILURE';
export const USER_CREATED = 'USER_CREATED';

export const requestToken = (props) => {
  return dispatch => {
    
    dispatch({ type: AUTH_PENDING });

    axios.post(`${apiBase}/accounts/sessions`, props)
      .then(response => {
        if (response.status === 201) {
          storage.setKey(response.data.jwt);
          dispatch(loginSuccess(response, props.username));
        } else {
          dispatch(loginFailure(response));
        }
      })
      .catch(error => {
        const message = {
          formErrors: 'Uh, oh - Something went wrong, but it\'s not your fault'
        };
        dispatch(loginFailure(message));
      });
  }
}

/* Browser has a token, but not logged in (page refresh, etc.) */
export const fetchUser = (token) => {
  return dispatch => {
    
    dispatch({ type: AUTH_PENDING });

    const config = {
      headers: {
        'Authorization': `JWT ${token}`
      }
    };
    axios.get(`${apiBase}/accounts/users/retrieve`, config)
      .then(response => {
        const jwt = response.data.jwt;
        dispatch(userRetrieved(response));
      }).catch(error => {
        dispatch(loginFailure(error));
      });
  }
}

export const createUser = (data) => {
  return dispatch => {
    console.log(data);
    return axios.post(`${apiBase}/accounts/users/create`, data).then(response => {
      if (response.status === 201) {
        dispatch(userCreated());
      } else {
        dispatch(userCreationFailure(response));
      }
    }).catch(error => {
      dispatch(userCreationFailure(error));
    });
  }
}

const loginSuccess = (response, email) => {
  console.log('----', email)
  return {
    type: LOGIN_SUCCESS,
    name: `${response.data.first_name} ${response.data.last_name}`,
    email: email
  };
}

const loginFailure = (errors) => {
  return {
    type: LOGIN_FAILURE,
    errors: errors
  };
}

export const logout = () => {
  return (dispatch) => {
    storage.setKey();
    dispatch(logoutSuccess());
    browserHistory.push("/");
  };
}

const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS
  };
}

const userCreated = () => {
  return {
    type: USER_CREATED
  };
}

const userCreationFailure = (error) => {
  return {
    type: USER_CREATION_FAILURE,
    errors: Object.values(error.response.data.errors)
  };
}

const userRetrieved = (response) => {
  return {
    type: USER_RETRIEVED,
    name: `${response.data.first_name} ${response.data.last_name}`,
    email: response.data.email
  };
}
