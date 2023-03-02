import {
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "./init";

export default {
  signInWithGoogle() {
    return new Promise((resolve, reject) => {
      signInWithPopup(auth, googleProvider)
        .then((userCredential) => {
          resolve(userCredential);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createUserWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          resolve(userCredential);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  signInWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          resolve(userCredential);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  signOut() {
    return new Promise((resolve, reject) => {
      signOut(auth)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
};
