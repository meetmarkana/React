import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyC1uvxqqz97QQ2owzCxVlRxWSAlOuWKqHo",
  authDomain: "test2-dfed4.firebaseapp.com",
  projectId: "test2-dfed4",
  storageBucket: "test2-dfed4.appspot.com",
  messagingSenderId: "88160970066",
  appId: "1:88160970066:web:d1a18bbe88efbf4424468b",
  measurementId: "G-9CE0801XJJ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}
