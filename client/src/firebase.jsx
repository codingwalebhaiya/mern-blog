// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY, 
  authDomain: "mern-blog-173a9.firebaseapp.com",
  projectId: "mern-blog-173a9",
  storageBucket: "mern-blog-173a9.appspot.com",
  messagingSenderId: "882688196499",
  appId: "1:882688196499:web:f0c0265ecf5595b4bb3266"
};
 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
