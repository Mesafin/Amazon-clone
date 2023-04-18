// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRU8JqDc30jjf9O7Y6YIBGmoGPEtS7CTg",
  authDomain: "clone-da64e.firebaseapp.com",
  projectId: "clone-da64e",
  storageBucket: "clone-da64e.appspot.com",
  messagingSenderId: "732245226596",
  appId: "1:732245226596:web:acdc1bfe8e780a3b59db71"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
