export const login = formData => {
  return dispatch => {
    fetch("https://unsplash-clone-server.herokuapp.com/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(resp => resp.json())
      .then(resp => {
        debugger;
      })
      // .then(user => dispatch({ type: "LOGIN_SUCCESS", payload: user }))
      .catch(error => {
        debugger;
      });
  };
};

// export const getUsers = () => {
//   return dispatch => {
//     fetch("https://unsplash-clone-server.herokuapp.com/users", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then(resp => resp.json())
//       .then(resp => dispatch({ type: "USERS_RETRIEVED", payload: resp.data }))
//       .catch(error => {
//         console.log(error);
//       });
//   };
// };
