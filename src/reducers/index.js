import { combineReducers } from 'redux';

import authReducer from './authReducer';
import transactionReducer from './transactionReducer';
import accountReducer from './accountReducer';


/* combine all of the other reducers */
export default combineReducers({
  authReducer,
  transactionReducer,
  accountReducer,
});
