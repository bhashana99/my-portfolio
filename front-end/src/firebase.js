// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.FIREBASE_API_KEY,
  authDomain: "my-portfolio-f8cb7.firebaseapp.com",
  projectId: "my-portfolio-f8cb7",
  storageBucket: "my-portfolio-f8cb7.appspot.com",
  messagingSenderId: "19951512002",
  appId: "1:19951512002:web:77a0afb612740f8e528e5b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);