// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXsGay9t20qbAsI1acUz7adBHdHaOaSqc",
  authDomain: "genesys-67705.firebaseapp.com",
  projectId: "genesys-67705",
  storageBucket: "genesys-67705.appspot.com",
  messagingSenderId: "493779256705",
  appId: "1:493779256705:web:bcaa280c45e8ce34179480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;