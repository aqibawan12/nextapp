import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBJ16Rk4wdtkpAMF1DEfZAR9b5zafl0kMQ",
  authDomain: "merit-blog.firebaseapp.com",
  databaseURL: "https://merit-blog.firebaseio.com",
  projectId: "merit-blog",
  storageBucket: "merit-blog.appspot.com",
  messagingSenderId: "580971367862",
  appId: "1:580971367862:web:d775c2a272753bccf90517",
  measurementId: "G-NY826E1JEY"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app)
export {app,auth,db};