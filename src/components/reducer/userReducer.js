const initialState = {
  users: [],
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      console.log("Action", action.user);
      return state;
    case "ADD_USER_ERROR":
      console.log("Action", action.err);
      return state;
    default:
      return state;
  }
};

export default userReducer;
