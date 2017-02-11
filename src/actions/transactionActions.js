import axios from 'axios';
import apiBase from '../utils/apiConfigUtils';

export const UPDATE_TRANSACTIONS = 'UPDATE_TRANSACTIONS';


export const fetchTransactions = (token) => {
  return dispatch => {
    const config = {
      headers: {
        'Authorization': `JWT ${token}`
      }
    };
    return axios.get(`${apiBase}/budgets/transactions`, config).then(response => {
      dispatch(updateTransactions(response.data));
    }).catch(error => {

    });
  };
}

export const updateTransactions = (data) => {
  return {
    type: UPDATE_TRANSACTIONS,
    data: data
  };
}
