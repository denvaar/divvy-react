import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  USER_RETRIEVED,
} from '../actions/authActions';


const INITIAL_STATE = {
  authenticated: false
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case USER_RETRIEVED:
      return {
        ...state,
        authenticated: true,
        email: action.email,
        name: action.name
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        errors: action.errors
      };
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default authReducer;
