import { iUser, LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS, SET_CURRENT_USER, LOGOUT_USER, REDIRECT, UserDispatchTypes, UserLogin, CLEAR_HISTORY} from './userTypes';
import { Dispatch } from 'redux';

export const loginUser = (userLogin: UserLogin) => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    dispatch({
      type: LOGIN_LOADING
    });

    await fetch("https://unsplash-clone-server.herokuapp.com/users/login", {
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

    const res = await fetch("https://unsplash-clone-server.herokuapp.com/users/me", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: "include"
                }).then((resp) => resp.json())

    console.log("RESPONSE:", res);
    dispatch({
      type: SET_CURRENT_USER,
      payload: res.user 
    })
    dispatch({
      type: REDIRECT,
      payload: {link: "/"}
    })

  } catch (error) {
    console.log(error)
    dispatch({
      type: LOGIN_FAILED,
      payload: error
    })
    dispatch({
      type: REDIRECT,
      payload: {link: "/"}
    })
  }
}


export const logoutUser = () => async (dispatch: Dispatch<UserDispatchTypes>) => {
  try {
    await fetch("https://unsplash-clone-server.herokuapp.com/users/logout", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    credentials: 'include'
                }).then((resp) => resp.json()).then((resp) => {
                  console.log(resp)
                })

                dispatch({
                  type: LOGOUT_USER
                });
  } catch (error) {
    dispatch({
    type: REDIRECT,
    payload: {link: "/"}
  })
    console.log(error)
  }
}

export const redirect = (link:any) => {
  console.log("=== REDIRECT ACTION DISPATCHED ===");
  return { type: REDIRECT, payload: link };
};

export const clearHistory = () => {
  console.log("=== CLEAR_HISTORY ACTION DISPATCHED ===");
  return { type: CLEAR_HISTORY };
};
