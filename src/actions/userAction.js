export const createUser = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .add({
        ...user,

        valuta: "USD",
      })
      .then(() => {
        dispatch({
          type: "ADD_USER",
          user: user,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_USER_ERROR",
          err: err,
        });
      });
  };
};
