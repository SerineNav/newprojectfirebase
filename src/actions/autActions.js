export const signIn = (fields) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(fields.email, fields.password)
      .then(() => {
        dispatch({
          type: "LOGIN_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "LOGIN_ERROR",
          err: err,
        });
      });
  };
};

export const logOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((resp) => {
        return firestore.collection("users").doc(resp.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          confirmPassword: newUser.password,
        });
      })
      .then(() => {
        dispatch({
          type: "SIGNUP_SUCCESS",
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGNUP_ERROR",
          err: err,
        });
      });
  };
};
