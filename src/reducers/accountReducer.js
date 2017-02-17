import {
  FETCH_BANK_ACCOUNTS
} from '../actions/accountActions';


const INITIAL_STATE = {
  bankAccounts: []
}

const accountReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_BANK_ACCOUNTS:
      return {
        ...state,
        bankAccounts: action.data
      };
    default:
      return state;
  }
}

export default accountReducer;
