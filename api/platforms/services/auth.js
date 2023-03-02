import auth from "../firebase/auth";

export default {
  signInWithGoogle() {
    return new Promise((resolve, reject) => {
      auth
        .signInWithGoogle()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  signUpWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  signInWithEmailAndPassword(email, password) {
    return new Promise((resolve, reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
  signOut() {
    return new Promise((resolve, reject) => {
      auth
        .signOut()
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
