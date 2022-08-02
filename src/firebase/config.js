import firebase from 'firebase' 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC2mZMyngVVRsBJT4UfECcmOixxQh1pk04",
    authDomain: "chatt-app-a2a2a.firebaseapp.com",
    projectId: "chatt-app-a2a2a",
    storageBucket: "chatt-app-a2a2a.appspot.com",
    messagingSenderId: "803346493128",
    appId: "1:803346493128:web:388400f8aecb0154743ffd",
    measurementId: "G-72GE520LMR"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db