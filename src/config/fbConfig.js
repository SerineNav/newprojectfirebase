import firebase from "firebase";
import "firebase/firestore";
//import "firebase.auth";

const firebaseConfig = {
  apiKey: "AIzaSyD4P_iH4iAHE3FurJSXkPDufM1-uAoeZ-Q",
  authDomain: "matadors-a1872.firebaseapp.com",
  databaseURL: "https://matadors-a1872.firebaseio.com",
  projectId: "matadors-a1872",
  storageBucket: "matadors-a1872.appspot.com",
  messagingSenderId: "712886989555",
  appId: "1:712886989555:web:bf4c10eb864904fd593d86",
  measurementId: "G-0CGX3EL31W"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
// const settings = { timestampsInSnapshots: true };
// firestore.settings(settings);

//firebase.analytics();
export default firebase;
