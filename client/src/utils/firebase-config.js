import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-netflix-clone-4abcd.firebaseapp.com",
  projectId: "react-netflix-clone-4abcd",
  storageBucket: "react-netflix-clone-4abcd.appspot.com",
  messagingSenderId: "1044947348223",
  appId: "1:1044947348223:web:d689ff469b32af16253aca",
  measurementId: "G-MMX11J3J30",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
