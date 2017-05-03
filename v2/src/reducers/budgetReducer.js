import {
  FETCH_BUDGETS_PENDING,
  FETCH_BUDGETS_SUCCESS,
  FETCH_BUDGETS_ERROR,
} from '../actions/budgetActions';


const INITIAL_STATE = {
  isFetching: false,
  budgets: []
}

const budgetReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BUDGETS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_BUDGETS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        budgets: action.data
      };
    case FETCH_BUDGETS_ERROR:
      return {
        ...state,
        isFetching: false
      };
    default:
      return state;
  }
}

export default budgetReducer;
