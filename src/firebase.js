import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA07Make5tI5oM95jsVn7v2U3U0FDxQ4_c",
  authDomain: "netflix-clone-93c41.firebaseapp.com",
  projectId: "netflix-clone-93c41",
  storageBucket: "netflix-clone-93c41.appspot.com",
  messagingSenderId: "432812357243",
  appId: "1:432812357243:web:e4ffa4ffa07ab0f28e14de",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
