// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHmQxehxaxKTVrDWcBAejB_6NPfBFaEGM",
  authDomain: "netflix-gpt-42660.firebaseapp.com",
  projectId: "netflix-gpt-42660",
  storageBucket: "netflix-gpt-42660.firebasestorage.app",
  messagingSenderId: "9655337289",
  appId: "1:9655337289:web:183418ce15f473b20a5a98",
  measurementId: "G-PQJ68Y6PFT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
