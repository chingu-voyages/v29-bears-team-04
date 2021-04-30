import { AnyAction } from "redux";

const initialState: UserState = {
    loggedIn: false,
    error: [],
};

export default function userReducer(state = initialState, action: AnyAction) {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { ...state, loggedIn: true, errors: [] };
        case "LOGIN_FAILURE":
            return { ...state, loggedIn: false, errors: action.payload };

        default:
            return state;
    }
}
