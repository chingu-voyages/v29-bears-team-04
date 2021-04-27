const INITIAL_USER_STATE = {
  name: "zach",
  email: "",
  avatar: "",
};

const userReducer = (
  state = INITIAL_USER_STATE,
  action:any
) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default userReducer;
