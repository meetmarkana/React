import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBk_6XtweMHcfxwPFx6CU8VP_DzIXVKGzk",
  authDomain: "db-first-3f3a2.firebaseapp.com",
  databaseURL: "https://db-first-3f3a2-default-rtdb.firebaseio.com",
  projectId: "db-first-3f3a2",
  storageBucket: "db-first-3f3a2.appspot.com",
  messagingSenderId: "310890627469",
  appId: "1:310890627469:web:a02dd4e79839b92081fdc4",
  measurementId: "G-PFH9YL8RWC"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export {database}