// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfFUKBhzVvgHBetSK9jrX5ges9bPy19l4",
  authDomain: "netflix-clone-f0c27.firebaseapp.com",
  databaseURL: "https://netflix-clone-f0c27-default-rtdb.firebaseio.com",
  projectId: "netflix-clone-f0c27",
  storageBucket: "netflix-clone-f0c27.appspot.com",
  messagingSenderId: "198398779016",
  appId: "1:198398779016:web:be0f004115a4e1c3a0493d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
