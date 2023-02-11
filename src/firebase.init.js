// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDs697iqWp1Ks7juhkCSF53us7uzN7D9Lc",
  authDomain: "genesys-task-9.firebaseapp.com",
  projectId: "genesys-task-9",
  storageBucket: "genesys-task-9.appspot.com",
  messagingSenderId: "936508044993",
  appId: "1:936508044993:web:fda2b47389ded7aa688640"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;