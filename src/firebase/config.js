import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:'AIzaSyC2mZMyngVVRsBJT4UfECcmOixxQh1pk04',
  authDomain: "chatt-app-a2a2a.firebaseapp.com",
  databaseURL:"http://chatt-app-a2a2a.firebaseio.com",
  projectId:"chatt-app-a2a2a",
  storageBucket: "chatt-app-a2a2a.appspot.com",
  messagingSenderId: "803346493128",
  appId:"1:803346493128:web:388400f8aecb0154743ffd",
  measurementId: "G-72GE520LMR",
};


 initializeApp(firebaseConfig);

 export const auth = getAuth();
 export const db = getFirestore()
 export const storage = getStorage();