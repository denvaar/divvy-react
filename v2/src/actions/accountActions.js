import axios from 'axios';
import apiBase from '../utils/apiConfigUtils';

export const FETCH_BANK_ACCOUNTS_PENDING = 'FETCH_BANK_ACCOUNTS_PENDING';
export const FETCH_BANK_ACCOUNTS_SUCCESS = 'FETCH_BANK_ACCOUNTS_SUCCESS';
export const FETCH_BANK_ACCOUNTS_ERROR = 'FETCH_BANK_ACCOUNTS_ERROR';

export const fetchBankAccounts = (token) => {
  return dispatch => {
    dispatch({ type: FETCH_BANK_ACCOUNTS_PENDING }); 
    
    const config = {
      headers: { 'Authorization': `JWT ${token}` }
    };

    axios.get(`${apiBase}/accounts/accounts/`, config)
      .then(response => {
        dispatch({
          type: FETCH_BANK_ACCOUNTS_SUCCESS,
          data: response.data.map(obj => (
            {
              ...obj,
              balance: Number(obj.balance)
            }
          ))
        });
      })
      .catch(error => {
        dispatch({
          type: FETCH_BANK_ACCOUNTS_ERROR,
          error: error
        });
      });
  }
}
