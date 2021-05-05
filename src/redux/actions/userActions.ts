import { ActionTypes } from "../actionTypes";
import Cookies from 'js-cookie'

export const login = (formData:any) => {
    return (dispatch:any) => {
        fetch("https://unsplash-clone-server.herokuapp.com/users/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(formData),
        })
            .then((resp) => resp.json())
            .then((user) => {
                if (user.success) { 
                    dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: user });
                    console.log(`from login: ${Cookies.get()}`)
                    dispatch(getUserData())
                } else {
                    dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: user.errors });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const logout = () => {
    return (dispatch:any) => {
        fetch("https://unsplash-clone-server.herokuapp.com/users/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((resp) => resp.json())
            .then((user) => {
                if (user.success) {
                    dispatch({ type: ActionTypes.LOG_OUT_SUCCESS, payload: user})
                } else {
                    dispatch({type: ActionTypes.LOG_OUT_FAILURE, payload: user.errors})
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export const register = (formData:any) => {
    return (dispatch:any) => {
        fetch("https://unsplash-clone-server.herokuapp.com/users/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include',
            body: JSON.stringify(formData),
        })
            .then((resp) => resp.json())
            .then((user) => {
                if (user.success) { 
                    dispatch({ type: ActionTypes.REGISTER_SUCCESS, payload: user });
                    dispatch(getUserData())
                } else {
                    dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: user.errors });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const updateUserData = (formData:any) => {
    return (dispatch:any) => {
        fetch("https://unsplash-clone-server.herokuapp.com/users/update", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(resp => resp.json())
        .then(user => {
            if (user.success) {
                dispatch({ type: ActionTypes.USER_UPDATE_SUCCESS, payload: user })
                getUserData();
            } else {
                dispatch({ type: ActionTypes.USER_UPDATE_FAILURE, payload: user.errors })
            }
        })
    }
}

export const getUserData = () => {
    return async (dispatch:any) => {
        await fetch("https://unsplash-clone-server.herokuapp.com/users/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((resp) => resp.json())
            .then((user) => {
                // debugger;
                console.log(`from getUserData: ${Cookies.get()}`)
                // dispatch({ type: ActionTypes.USER_UPDATE_SUCCESS, payload: user.data })
            })
            .catch((error) => {
                console.log(error);
            });
    };
};


