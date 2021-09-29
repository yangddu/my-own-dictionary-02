
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

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

export const db = getFirestore();