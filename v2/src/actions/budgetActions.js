import axios from 'axios';
import apiBase from '../utils/apiConfigUtils';


export const FETCH_BUDGETS_PENDING = 'FETCH_BUDGETS_PENDING';
export const FETCH_BUDGETS_SUCCESS = 'FETCH_BUDGETS_SUCCESS';
export const FETCH_BUDGETS_ERROR = 'FETCH_BUDGETS_ERROR';

export const fetchBudgets = (token) => {
  return dispatch => {
    
    dispatch({ type: FETCH_BUDGETS_PENDING });

    const config = {
      headers: { 'Authorization': `JWT ${token}` }
    };

    axios.get(`${apiBase}/budgets/budgets/`, config)
      .then(response => {
        dispatch({
          type: FETCH_BUDGETS_SUCCESS,
          data: response.data.map(obj => (
            {
              ...obj,
              amount: Number(obj.amount),
              goal: Number(obj.goal)
            }
          ))
        });
      })
      .catch(error => { 
        dispatch({
          type: FETCH_BUDGETS_ERROR,
          error: error
        });
      });
  };
};
