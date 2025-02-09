// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1wEE2w5p7jC3POwp3EevqHMCWk3jfoOI",
  authDomain: "journal-app-96244.firebaseapp.com",
  projectId: "journal-app-96244",
  storageBucket: "journal-app-96244.firebasestorage.app",
  messagingSenderId: "381364117223",
  appId: "1:381364117223:web:7e9fb7ab3b103a5946cc42",
  measurementId: "G-C2LGCXFHEE",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
