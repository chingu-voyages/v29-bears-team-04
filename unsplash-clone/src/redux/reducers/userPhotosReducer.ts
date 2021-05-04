import { ActionTypes } from "../actionTypes";
import { UserPhotosState, UserPhotosAction } from "../type";

const initialState: UserPhotosState = {
    all: [],
};

export default function userPhotosReducer(state = initialState, action: UserPhotosAction) {
    switch (action.type) {
        case ActionTypes.USER_PHOTOS_RETRIEVED_SUCCESS:
            return {...state, all: action.payload}

        default:
            return state;
    }
}
