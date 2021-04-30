import { Action } from "redux";

interface IUser {
    email: string;
    password: string;
    name: string;
}

interface UserAction extends Action {
    payload: LoginAction | LogoutAction;
}

type UserState = {
    loggedIn: Boolean;
    error?: [JSON];
};

type LoginAction = {};

type LogoutAction = {};
