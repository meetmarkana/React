import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyConyeym2BMIQwnCnYLUMwp20nCLZdOALE",
  authDomain: "project3-48999.firebaseapp.com",
  projectId: "project3-48999",
  storageBucket: "project3-48999.appspot.com",
  messagingSenderId: "266417517265",
  appId: "1:266417517265:web:c6b91298aa1f617e608bf0",
  measurementId: "G-TH2BY70KR4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };