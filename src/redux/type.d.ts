import { Action } from "redux";

interface IUserData {
    email: string;
    password?: string;
    name: string;
    id: number
}

interface UserAction extends Action {
    payload: LoginAction | LogoutAction | UserDataAction;
}

interface UserPhotosAction extends Action {
    payload: {}
}

type UserState = {
    loggedIn: Boolean;
    errors?: [JSON];
    userData: {
        name: string;
        id: number;
        email: string
    }
};

type UserPhotosState = {
    all: []
}

type LoginAction = {
    loggedIn: Boolean;
};

type LogoutAction = {
    loggedIn: Boolean;
};

// type UserDataAction = IUserData;

type UserDataAction = {};




