// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdoXpe-GJ5F4akikJH4MqKtxAAcM2ka3E",
  authDomain: "job-portal-4a6fa.firebaseapp.com",
  projectId: "job-portal-4a6fa",
  storageBucket: "job-portal-4a6fa.firebasestorage.app",
  messagingSenderId: "321785382327",
  appId: "1:321785382327:web:b9c8705965caf079c61432"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);