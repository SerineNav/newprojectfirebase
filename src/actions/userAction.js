export const createUser = (user) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("client")
      .add({
        ...user,
        firstName: "Sara",
        lastName: "Jones",
        email: "Sara@gmail.com"
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
