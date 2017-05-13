import axios from 'axios';
import apiBase from '../utils/apiConfigUtils';

/* transaction action types */
export const FETCH_TRANSACTIONS_PENDING = 'FETCH_TRANSACTIONS_PENDING';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_ERROR = 'FETCH_TRANSACTIONS_ERROR';

export const UPDATE_TRANSACTION_PENDING = 'UPDATE_TRANSACTION_PENDING';
export const UPDATE_TRANSACTION_SUCCESS = 'UPDATE_TRANSACTION_SUCCESS';
export const UPDATE_TRANSACTION_ERROR = 'UPDATE_TRANSACTION_ERROR';

export const CATEGORIZE_TRANSACTION_PENDING = 'CATEGORIZE_TRANSACTION_PENDING';
export const CATEGORIZE_TRANSACTION_SUCCESS = 'CATEGORIZE_TRANSACTION_SUCCESS';
export const CATEGORIZE_TRANSACTION_ERROR = 'CATEGORIZE_TRANSACTION_ERROR';

/* transaction action creators */
export const fetchTransactions = (token) => {
  return dispatch => {

    dispatch({ type: FETCH_TRANSACTIONS_PENDING });
    
    const config = {
      headers: { 'Authorization': `JWT ${token}` }
    };

    axios.get(`${apiBase}/budgets/transactions`, config)
      .then(response => {
        dispatch({
          type: FETCH_TRANSACTIONS_SUCCESS,
          data: response.data.map(obj => (
            { ...obj, amount: Number(obj.amount) }
          ))
        });
      })
      .catch(error => {
        throw error;
        dispatch({
          type: FETCH_TRANSACTIONS_ERROR,
          error: error
        });
      });

  }
}

export const updateTransaction = (token, id, data) => {
  return dispatch => {
    dispatch({ type: UPDATE_TRANSACTION_PENDING });

    const config = {
      headers: { 'Authorization': `JWT ${token}` }
    };

    axios.patch(`${apiBase}/budgets/transaction/${id}/update`, data, config)
      .then(response => {
        dispatch({
          type: UPDATE_TRANSACTION_SUCCESS,
          transactionId: id,
          data: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: UPDATE_TRANSACTION_ERROR,
          error: error,
        });
      });
  };
}

export const categorizeTransaction = (token, id, data) => {
  return dispatch => {
    dispatch({ type: CATEGORIZE_TRANSACTION_PENDING });

    const config = {
      headers: { 'Authorization': `JWT ${token}` }
    };
    
    return axios.post(`${apiBase}/budgets/transaction/record`, data, config)
      .then(response => {
        dispatch({
          type: CATEGORIZE_TRANSACTION_SUCCESS,
          transactionId: id,
          data: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: CATEGORIZE_TRANSACTION_ERROR,
          error: error
        });
      });
  };
}
