import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

  export {
    firebase,
    googleAuthProvider,
    facebookAuthProvider
  }