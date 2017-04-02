import {
  UPDATE_TRANSACTIONS,
  UPDATE_TRANSACTION,
} from '../actions/transactionActions';


const INITIAL_STATE = {
  transactions: []
}

const transactionReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_TRANSACTIONS:
      return {
        ...state,
        transactions: action.data
      };
    
    case UPDATE_TRANSACTION:
      const index = state.transactions.findIndex(
        transaction => transaction.id === action.transactionId);
      return {
        ...state,
        transactions: [
          ...state.transactions.slice(0, index),
          {
            ...state.transactions[index],
            ...action.data
          },
          ...state.transactions.slice(index + 1)
        ]
      };
      
    default:
      return state;
  }
}

export default transactionReducer;
