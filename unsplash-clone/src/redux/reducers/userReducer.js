const userReducer = (
  state = {
    loggedin: false,
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, loggedin: true };

    default:
      return state;
  }
};

export default userReducer;
