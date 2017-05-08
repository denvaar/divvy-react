import {
  AUTH_PENDING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  USER_RETRIEVED,
} from '../actions/authActions';


const INITIAL_STATE = {
  authenticated: false,
  isFetching: false,
  errors: undefined
}

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case LOGIN_SUCCESS:
    case USER_RETRIEVED:
      return {
        ...state,
        isFetching: false,
        authenticated: true,
        email: action.email,
        name: action.name,
        errors: undefined
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        errors: action.errors
      };
    case LOGOUT_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}

export default authReducer;
