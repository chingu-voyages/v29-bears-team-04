import { ActionTypes } from "../actionTypes";
import { UserAction, UserState } from "../type";

const initialState: UserState = {
    loggedIn: false,
};

export default function userReducer(state = initialState, action: UserAction) {
    switch (action.type) {
        case ActionTypes.LOGIN_SUCCESS:
            return { ...state, loggedIn: true, errors: [] };
        case ActionTypes.LOGIN_FAILURE:
            return { ...state, loggedIn: false, errors: action.payload };
        case ActionTypes.REGISTER_SUCCESS:
            return {...state, loggedIn: true, errors: [] }
        case ActionTypes.LOG_OUT_SUCCESS:
            return {...state, loggedIn: false, errors: []}
        case ActionTypes.LOG_OUT_FAILURE:
            return {...state,errors: action.payload}

        default:
            return state;
    }
}