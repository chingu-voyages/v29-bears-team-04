export const login = () => {
  return dispatch => {
    fetch("https://unsplash-clone-server.herokuapp.com/login", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(resp => resp.json())
      // .then(resp => {
      //   console.log(resp);
      // })
      // .then(user => dispatch({ type: "LOGIN_SUCCESS", payload: user }))
      .catch(error => {
        console.log(error);
      });
  };
};
