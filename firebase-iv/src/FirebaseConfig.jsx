import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBwebRpiL5F7UVGiGlDGh9noda_PptgkDY",
  authDomain: "db-rev-1.firebaseapp.com",
  databaseURL: "https://db-rev-1-default-rtdb.firebaseio.com",
  projectId: "db-rev-1",
  storageBucket: "db-rev-1.appspot.com",
  messagingSenderId: "839185640781",
  appId: "1:839185640781:web:564fb8100e8b8b3222db04",
  measurementId: "G-1874RCG81C"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase();

export {database}