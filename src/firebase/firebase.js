import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

var firebaseConfig = {
  apiKey: "AIzaSy1bSfDw1SnV4Nd9h5m-jwDMAgDoPPPzB0k",
  authDomain: "starterpack-75abc.firebaseapp.com",
  projectId: "starterpack-85adc",
  storageBucket: "starterpack-851bc.appspot.com",
  messagingSenderId: "254625368863",
  appId: "1:354625368883:web:318752b113f868c63e762a"
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