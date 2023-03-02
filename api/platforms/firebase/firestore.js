import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  getDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase/init";

export default {
  getCollection(collectionId) {
    return new Promise((resolve, reject) => {
      getDocs(collection(db, collectionId))
        .then((querySnapshot) => {
          const documents = [];
          querySnapshot.forEach((doc) => {
            const document = {
              id: doc.id,
              data: doc.data(),
            };
            documents.push(document);
          });
          resolve(documents);
        })
        .catch((error) => reject(error));
    });
  },
  setDocument(id, payload) {
    return new Promise((resolve, reject) => {
      (() => {
        try {
          setDoc(doc(db, id, payload.uid), payload, {
            merge: true,
          }).then((res) => resolve(res));
        } catch (err) {
          reject(err);
        }
      })();
    });
  },
  getDocument(collectionId, documentId) {
    return new Promise((resolve, reject) => {
      (async () => {
        try {
          const docRef = doc(db, collectionId, documentId);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            resolve(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            reject(Error("No such document!"));
          }
        } catch (err) {
          reject(err);
        }
      })();
    });
  },
  queryCollection(collectionId, filter) {
    return new Promise((resolve, reject) => {
      const q = query(
        collection(db, collectionId),
        where(filter.fieldToFilter, filter.comparison, filter.value)
      );
      getDocs(q)
        .then((querySnapshot) => {
          const documents = [];
          querySnapshot.forEach((doc) => {
            const document = {
              id: doc.id,
              data: doc.data(),
            };
            documents.push(document);
          });
          resolve(documents);
        })
        .catch((error) => reject(error));
    });
  },
  addDocument(collectionId, documentData) {
    return new Promise((resolve, reject) => {
      addDoc(collection(db, collectionId), documentData)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  },
};
