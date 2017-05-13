import {
  FETCH_BANK_ACCOUNTS_PENDING,
  FETCH_BANK_ACCOUNTS_SUCCESS,
  FETCH_BANK_ACCOUNTS_ERROR,
} from '../actions/accountActions';


const INITIAL_STATE = {
  bankAccounts: [],
  isFetching: false
}

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BANK_ACCOUNTS_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_BANK_ACCOUNTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        bankAccounts: action.data
      };
    case FETCH_BANK_ACCOUNTS_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
}

export default accountReducer;
