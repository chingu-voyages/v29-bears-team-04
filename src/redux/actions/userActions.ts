import { ActionTypes } from "../actionTypes";
// import Cookies from 'js-cookie'

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
                } else {
                    dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: user.errors });
                }
            })
            .then(() => getUserData())
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
    setTimeout((dispatch:any) => {
        fetch("https://unsplash-clone-server.herokuapp.com/users/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: "include"
        })
            .then((resp) => resp.json())
            .then((user) => {
                // dispatch({ type: ActionTypes.GET_USER_DATA_SUCCESS, payload: user.user })
                console.log(user.user)
                // debugger;
            })
            .catch((error) => {
                console.log(error);
            });
    }, 5000);
};


