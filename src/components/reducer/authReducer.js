const initialState = {
  authError: null,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Error");
      return {
        ...state,
        authError: "Ooops loggin failed",
      };

    case "LOGIN_SUCCESS":
      console.log("Login");
      return {
        ...state,
        authError: null,
      };
    case "LSIGNUP_SUCCESS":
      console.log("Signup");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("Error");
      return {
        ...state,
        authError: "Ooops loggin failed",
      };
    default:
      return state;
  }
};

export default authReducer;
