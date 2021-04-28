import { AnyAction } from 'redux'

interface UserState {
  loggedin: boolean,
  errors: []
}

const initialState: UserState = {
    loggedin: false,
    errors: []
}

export default function userReducer(
  state = initialState,
  action: AnyAction
) {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, loggedin: true, errors: [] };
    case "LOGIN_FAILURE":
      return { ...state, loggedin: false, errors: action.payload}

    default:
      return state;
  }
}

