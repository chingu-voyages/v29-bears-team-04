export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const REDIRECT = "REDIRECT";
export const CLEAR_HISTORY = "CLEAR_HISTORY"

export interface iUser {
  id: number,
  name: string,
  email: string
}

export interface UserLogin {
  email: string,
  password: string,
}

export interface historyProps {
  link: string
}

export interface Redirect {
  type: typeof REDIRECT,
  payload: historyProps
}

export interface ClearHistory {
  type: typeof CLEAR_HISTORY
}

export interface UserLogout {
  type: typeof LOGOUT_USER
}

export interface LoginLoading {
  type: typeof LOGIN_LOADING
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS,
}

export interface LoginFailed {
  type: typeof LOGIN_FAILED,
  payload: any
}

export interface SetCurrentUser {
  type: typeof SET_CURRENT_USER,
  payload: iUser,
};

export type UserDispatchTypes = 
  LoginLoading |
  LoginSuccess |
  LoginFailed |
  SetCurrentUser |
  UserLogout |
  Redirect |
  ClearHistory
