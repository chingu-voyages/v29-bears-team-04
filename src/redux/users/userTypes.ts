export const LOGIN_LOADING = "LOGIN_LOADING";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const SET_CURRENT_USER = "SET_CURRENT_USER";

export interface iUser {
  id: number,
  name: string,
  email: string
}

export interface UserLogin {
  email: string,
  password: string,
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
  SetCurrentUser
