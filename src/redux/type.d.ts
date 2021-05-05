import { Action } from "redux";

interface IUser {
    email: string;
    password: string;
    name: string;
    id: number
}

interface UserAction extends Action {
    payload: LoginAction | LogoutAction | id | email | name;
}

interface UserPhotosAction extends Action {
    payload: {}
}

type UserState = {
    loggedIn: Boolean;
    error?: [JSON];
    name: string;
    id: number;
    email: string
};

type UserPhotosState = {
    all: []
}

type LoginAction = {};

type LogoutAction = {};




