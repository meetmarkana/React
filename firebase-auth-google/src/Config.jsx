import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5OOg2-0SfMwZUYFujRBjwR8-GHpKiEps",
  authDomain: "test-d33dd.firebaseapp.com",
  projectId: "test-d33dd",
  storageBucket: "test-d33dd.appspot.com",
  messagingSenderId: "5253353267",
  appId: "1:5253353267:web:8b303d24da4159647c7846",
  measurementId: "G-5P6ELE9JSZ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth , provider}