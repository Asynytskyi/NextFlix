import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Firebase web app configuration:
const firebaseConfig = {
  apiKey: "AIzaSyCtnxUPk8z4eCuSQRR32PmoigqIiGsjm0w",
  authDomain: "nextflix-355e8.firebaseapp.com",
  projectId: "nextflix-355e8",
  storageBucket: "nextflix-355e8.appspot.com",
  messagingSenderId: "1005544143233",
  appId: "1:1005544143233:web:5d26d0b80c3196197fd080",
  measurementId: "G-XKJEDJ1WZQ",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
