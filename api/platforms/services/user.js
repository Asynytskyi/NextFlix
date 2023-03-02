import firestoreService from "../firebase/firestore.js";

export default {
  setUser(user) {
    return new Promise((resolve, reject) => {
      firestoreService
        .setDocument("users", user)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  getUser(userId) {
    return new Promise((resolve, reject) => {
      firestoreService
        .getDocument("users", userId)
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
  getUsers() {
    return new Promise((resolve, reject) => {
      firestoreService
        .getCollection("users")
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  },
};
