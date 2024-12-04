import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlL6SzhBUKnPF0NV3JZXyxkcOXlnsuhsg",
  authDomain: "auth-ins.firebaseapp.com",
  projectId: "auth-ins",
  storageBucket: "auth-ins.firebasestorage.app",
  messagingSenderId: "513291360486",
  appId: "1:513291360486:web:f7e5b1a79663f5d35d8327",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
