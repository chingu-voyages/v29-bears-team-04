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

        default:
            return state;
    }
}
