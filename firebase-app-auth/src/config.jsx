
import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCAY0fW1O0H4O6t4wKiPWm8CeeKZPcrSAU",
  authDomain: "authantication1-dcd60.firebaseapp.com",
  projectId: "authantication1-dcd60",
  storageBucket: "authantication1-dcd60.appspot.com",
  messagingSenderId: "60111025430",
  appId: "1:60111025430:web:377f530b3b6101f7a00c37",
  measurementId: "G-YLV6Y91R7B"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();

export { auth, facebookProvider };