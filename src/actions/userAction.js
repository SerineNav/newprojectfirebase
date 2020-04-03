export const createUser = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .add({
        ...user,
        id: 12,
        balance: "100$"
      })
      .then(() => {
        dispatch({
          type: "ADD_USER",
          user: user
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_USER_ERROR",
          err: err
        });
      });
  };
};
