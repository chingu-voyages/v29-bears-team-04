import { iUser, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, SET_CURRENT_USER, UserDispatchTypes, UserLogin } from './userTypes';
import { Dispatch } from 'redux';

export const loginUser = (userLogin: UserLogin) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: LOGIN_LOADING
    });

    await fetch("https://us-server-test.herokuapp.com/users/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include',
                    body: JSON.stringify(userLogin),
                });

    dispatch({
      type: LOGIN_SUCCESS
    });

    const res = await fetch("https://us-server-test.herokuapp.com/users/me", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include"
                }).then((resp) => resp.json());

    console.log("RESPONSE:", res);
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.user 
    })

  } catch (error) {
    console.log(error)
    dispatch({
      type: LOGIN_FAILED,
      payload: error
    })
  }
}