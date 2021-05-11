import {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_USER,
  iUser,
  UserDispatchTypes,
  SET_CURRENT_USER
} from './userTypes';

export interface userState {
  isLoggedIn: boolean,
  loading: boolean,
  currentUser: iUser,
  errors?: any
};

export const INITIAL_STATE = {
  isLoggedIn: false,
  loading: false,
  currentUser: {} as iUser,
  errors: null
};

const userReducer = (state: userState = INITIAL_STATE, action: UserDispatchTypes) => {
  switch(action.type) {
    case LOGIN_LOADING: 
      return {
        ...state,
        loading: true
      }
    case LOGIN_SUCCESS: 
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      }
    case LOGIN_FAILED:
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
        errors: action.payload
      }
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
      case LOGOUT_USER:
        return INITIAL_STATE
    default: 
      return state
  }
};

export default userReducer;