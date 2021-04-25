const userReducer = (
  state = {
    name: "zach",
    email: "",
    avatar: "",
  },
  action
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default userReducer;
