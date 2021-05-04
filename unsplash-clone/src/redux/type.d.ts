import { Action } from "redux";

interface IUser {
    email: string;
    password: string;
    name: string;
}

interface UserAction extends Action {
    payload: LoginAction | LogoutAction;
}

interface UserPhotosAction extends Action {
    payload: {}
}

type UserState = {
    loggedIn: Boolean;
    error?: [JSON];
};

type UserPhotosState = {
    all: []
}

type LoginAction = {};

type LogoutAction = {};




