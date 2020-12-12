import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqe8a-2CYqo37iyyvdzg6hs_Fyb1FcUbo",
  authDomain: "challenge-ff2e6.firebaseapp.com",
  projectId: "challenge-ff2e6",
  storageBucket: "challenge-ff2e6.appspot.com",
  messagingSenderId: "1060314421462",
  appId: "1:1060314421462:web:f9803f628a9ed9f02f9177",
  measurementId: "G-3HRBDHT7NE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
