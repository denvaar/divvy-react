import {
  FETCH_TRANSACTIONS_PENDING,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_ERROR,
  UPDATE_TRANSACTION_PENDING,
  UPDATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_ERROR,
  CATEGORIZE_TRANSACTION_PENDING,
  CATEGORIZE_TRANSACTION_SUCCESS,
  CATEGORIZE_TRANSACTION_ERROR,
  FILTER_TRANSACTIONS,
} from '../actions/transactionActions';


const INITIAL_STATE = {
  filters: 'uncategorized',
  transactions: [],
  isFetching: false
}

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_TRANSACTIONS_PENDING:
    case UPDATE_TRANSACTION_PENDING:
    case CATEGORIZE_TRANSACTION_PENDING:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_TRANSACTIONS_ERROR: 
    case UPDATE_TRANSACTION_ERROR: 
    case CATEGORIZE_TRANSACTION_ERROR: 
      return {
        ...state,
        isFetching: false,
        error: action.error
      };
    case FETCH_TRANSACTIONS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        transactions: action.data
      };
    }
    case UPDATE_TRANSACTION_SUCCESS: {
      const index = state.transactions.findIndex(
        transaction => transaction.id === action.transactionId);
      return {
        ...state,
        isFetching: false,
        transactions: [
          ...state.transactions.slice(0, index),
          {
            ...state.transactions[index],
            ...action.data
          },
          ...state.transactions.slice(index + 1)
        ]
      };
    }
    case CATEGORIZE_TRANSACTION_SUCCESS: {
      const index = state.transactions.findIndex(
        transaction => transaction.id === action.transactionId);
      return {
        ...state,
        isFetching: false,
        transactions: [
          ...state.transactions.slice(0, index),
          {
            ...state.transactions[index],
            categorized: true
          },
          ...state.transactions.slice(index + 1)
        ]
      };
    }
    case FILTER_TRANSACTIONS: {
      return {
        ...state,
        filters: action.filters
      };
    }
    default:
      return state;
  }
}

export default transactionReducer;
