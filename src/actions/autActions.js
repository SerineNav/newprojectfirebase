import { firebaseConnect } from "react-redux-firebase";

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

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();
    firebase
      .auth()
      .signInWithEmailAndPassword(newUser.email, newUser.password)
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
