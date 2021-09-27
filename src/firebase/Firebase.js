// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2s4QoVjnR5V90MF5hJprKLYb1h4asv-A",
  authDomain: "my-dictionary-02.firebaseapp.com",
  projectId: "my-dictionary-02",
  storageBucket: "my-dictionary-02.appspot.com",
  messagingSenderId: "299370296793",
  appId: "1:299370296793:web:f4708e948ebd30f97995c8",
  measurementId: "G-1H29RRS3YV"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const db = getFirestore();