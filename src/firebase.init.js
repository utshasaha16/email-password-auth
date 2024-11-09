// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBDlcL29_k-wP-jcha0kufQ_GdY8Jvp3I",
  authDomain: "log-in-form-f2eb2.firebaseapp.com",
  projectId: "log-in-form-f2eb2",
  storageBucket: "log-in-form-f2eb2.firebasestorage.app",
  messagingSenderId: "566121552333",
  appId: "1:566121552333:web:0eebafdb71738f35b08c84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);