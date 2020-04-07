const initialState = {
  authError: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Error");
      return {
        ...state,
        authError: "Ooops loggin or password failed",
      };

    case "LOGIN_SUCCESS":
      console.log("Login");
      return {
        ...state,
        authError: null,
      };

    case "SIGNUP_SUCCESS":
      console.log("Signup");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("Error");
      return {
        ...state,
        authError: action.err.message,
      };
    case "LOGOUT_SUCCESS":
      console.log("Logout");
      return state;
    default:
      return state;
  }
};

export default authReducer;
