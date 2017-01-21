import { combineReducers } from 'redux';

import authReducer from './authReducer';

/* combine all of the other reducers */
export default combineReducers({
  authReducer
});
