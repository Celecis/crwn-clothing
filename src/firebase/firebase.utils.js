import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXeK6Rg_sAcf30__xHi511wI_q71xH_Pg",
  authDomain: "crwn-db-c9048.firebaseapp.com",
  projectId: "crwn-db-c9048",
  storageBucket: "crwn-db-c9048.appspot.com",
  messagingSenderId: "196214841040",
  appId: "1:196214841040:web:c6cde10f92f4e6254488d5",
  measurementId: "G-SHENQ87C7L",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
