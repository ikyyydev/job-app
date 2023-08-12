import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0Fwlj9ZUpRQPdlpJAJ8CEWUbhi_1g57E",
  authDomain: "jobapp-react.firebaseapp.com",
  projectId: "jobapp-react",
  storageBucket: "jobapp-react.appspot.com",
  messagingSenderId: "612463812786",
  appId: "1:612463812786:web:9c0554d914d09a2c02e9ab",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
