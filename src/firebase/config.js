import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey:'AIzaSyC2mZMyngVVRsBJT4UfECcmOixxQh1pk04',
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId:  process.env.REACT_APP_PROJECT_ID,
  storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId:  process.env.REACT_APP_APP_ID,
  measurementId: "G-72GE520LMR",
};


 initializeApp(firebaseConfig);


export const auth = getAuth();
