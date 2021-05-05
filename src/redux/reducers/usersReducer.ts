const usersReducer = (
  state = {
    all: [],
  },
  action:any
) => {
  switch (action.type) {
    case "USERS_RETRIEVED":
      return { ...state, all: action.payload };

    default:
      return state;
  }
};

export default usersReducer;