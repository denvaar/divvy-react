import axios from 'axios';
import apiBase from '../utils/apiConfigUtils';


export const FETCH_BANK_ACCOUNTS = 'FETCH_BANK_ACCOUNTS';

export const fetchBankAccounts = (token) => {
  return dispatch => {
    const config = {
      headers: {
        'Authorization': `JWT ${token}`
      }
    };
    return axios.get(`${apiBase}/accounts/accounts/`, config)
      .then(response => {
        dispatch(_fetchBankAccounts(response.data));
    }).catch(error => { });
  };
};

const _fetchBankAccounts = (data) => {
  return {
    type: FETCH_BANK_ACCOUNTS,
    data: data
  };
}
