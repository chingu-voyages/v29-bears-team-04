// import { ThunkAction } from "redux-thunk";

export const login = () => {
  return dispatch => {
    fetch("https://unsplash-clone-server.herokuapp.com/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      .then(user => dispatch({ type: "LOGIN_SUCCESS", payload: user }));
  };
};
