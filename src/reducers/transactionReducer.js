import {
  UPDATE_TRANSACTIONS,
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
      
    default:
      return state;
  }
}

export default transactionReducer;
