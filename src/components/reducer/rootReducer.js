const initialState = {
  users: [
    { firstName: "Amili", lastName: " Smith", email: "amili@gmail.com" },
    { firstName: "Jhon", lastName: " Doe", email: "jhon@gmail.com" },
    { firstName: "Robert", lastName: " Lambert", email: "robert@gmail.com" }
  ]
};
const rootReducer = (state = initialState, action) => {
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

export default rootReducer;
