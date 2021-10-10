/* import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCXeK6Rg_sAcf30__xHi511wI_q71xH_Pg",
  authDomain: "crwn-db-c9048.firebaseapp.com",
  projectId: "crwn-db-c9048",
  storageBucket: "crwn-db-c9048.appspot.com",
  messagingSenderId: "196214841040",
  appId: "1:196214841040:web:c6cde10f92f4e6254488d5",
  measurementId: "G-SHENQ87C7L",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // 176
  // const collectionSnapshot = await collectionRef.get();
  // console.log( {collection: collectionSnapshot.docs.map(doc => doc.data()) });

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// code added in 177
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

//Se acontecer alguma vez o erro de não haver permissões
// Uncaught (in promise) FirebaseError: Missing or insufficient permissions
// just go to firestore database > rules
// then change the request.time < timestamp.date to some time in the future*/

// AFTER 178
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCXeK6Rg_sAcf30__xHi511wI_q71xH_Pg",
  authDomain: "crwn-db-c9048.firebaseapp.com",
  projectId: "crwn-db-c9048",
  storageBucket: "crwn-db-c9048.appspot.com",
  messagingSenderId: "196214841040",
  appId: "1:196214841040:web:c6cde10f92f4e6254488d5",
  measurementId: "G-SHENQ87C7L",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

//AFTER 180
export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
    // the encodeURI method comes with every JS render
    // it recieves a string and returns a string where any characters
    // that a URL cannot handle/process and convert them to URL friendly
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
  // we pass in our original object {}
  // that initial obj goes to the 1st new collection
  // and sets the 1st value equal to the value in lowercase
  // faz o resto das iterações até a collection acabar
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
