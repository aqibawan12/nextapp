import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBdqOLlBPB4DCwqEDYsZWzS6kRoIqGL4eY",
  authDomain: "first-react-app-43bb2.firebaseapp.com",
  projectId: "first-react-app-43bb2",
  storageBucket: "first-react-app-43bb2.appspot.com",
  messagingSenderId: "258158230664",
  appId: "1:258158230664:web:ad48f9ad8481c91ad9b33d",
  measurementId: "G-GHC8YJMBQF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth};