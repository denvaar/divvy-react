import axios from 'axios';
import apiBase from '../utils/apiConfigUtils';

export const UPDATE_TRANSACTIONS = 'UPDATE_TRANSACTIONS';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';


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

export const updateTransaction = (token, id, data) => {
  return dispatch => {
    const config = {
      headers: {
        'Authorization': `JWT ${token}`
      }
    };
    return axios.patch(`${apiBase}/budgets/transaction/${id}/update`, data, config).then(response => {
      console.log(data, response.data);
      dispatch(updateTransactionAction(id, response.data));
    }).catch(error => {

    });
  };
}

const updateTransactionAction = (id, data) => {
  return {
    type: UPDATE_TRANSACTION,
    transactionId: id,
    data: data
  };
}

export const updateTransactions = (data) => {
  return {
    type: UPDATE_TRANSACTIONS,
    data: data
  };
}
