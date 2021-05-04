import { ActionTypes } from "../actionTypes";

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
                    // debugger;
                    dispatch(getUserData())
                    // dispatch({ type: ActionTypes.LOGIN_SUCCESS, payload: user });
                } else {
                    dispatch({ type: ActionTypes.LOGIN_FAILURE, payload: user.errors });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const getUserData = () => {
    return (dispatch:any) => {
        fetch("https://unsplash-clone-server.herokuapp.com/users/me", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then((resp) => resp.json())
            .then((user) => {
                debugger;
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

