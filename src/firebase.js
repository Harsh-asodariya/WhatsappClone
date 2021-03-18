import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD4ZWVr7l-n9X6ab42OxbBCHqHZHOAjO1c",
    authDomain: "friends-585a9.firebaseapp.com",
    projectId: "friends-585a9",
    storageBucket: "friends-585a9.appspot.com",
    messagingSenderId: "70740993620",
    appId: "1:70740993620:web:c418b093a10a1a1d5b6fc1",
    measurementId: "G-Y0QM20QLKV"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig)

  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;