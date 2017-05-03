import { combineReducers } from 'redux';

import accountReducer from './accountReducer';
import authReducer from './authReducer';
import budgetReducer from './budgetReducer';
import transactionReducer from './transactionReducer';

/* combine all of the other reducers */
export default combineReducers({
  accountReducer,
  authReducer,
  budgetReducer,
  transactionReducer,
});
