// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp8jw0iOFFTdsqZZkmokeRBjy9HtPaDlY",
  authDomain: "project-i-3cc76.firebaseapp.com",
  projectId: "project-i-3cc76",
  storageBucket: "project-i-3cc76.firebasestorage.app",
  messagingSenderId: "710194522251",
  appId: "1:710194522251:web:6d2242b3e327f3ea610c8e",
  measurementId: "G-RDEJR2T6R2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();