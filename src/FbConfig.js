import { initializeApp } from "firebase/app";
import {getDatabase}from"firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC7WU56aq7CX1EtizotSc3hf5oXCSUKYqc",
  authDomain: "employee27july2023.firebaseapp.com",
  databaseURL: "https://employee27july2023-default-rtdb.firebaseio.com",
  projectId: "employee27july2023",
  storageBucket: "employee27july2023.appspot.com",
  messagingSenderId: "671860389751",
  appId: "1:671860389751:web:5a68213ce9d45e20551372"
};

const app = initializeApp(firebaseConfig);
const db=getDatabase(app);
export default db;