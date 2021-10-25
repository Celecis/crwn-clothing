import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.firestore();

// QUERY
firestore
  .collection("users")
  .doc("rzWVFNHJIL2qJmUlzRB8")
  .collection("cartItems")
  .doc("QYNr55mgDYETNVRrwGLR");

// SAME AS:
firestore.doc("/users/rzWVFNHJIL2qJmUlzRB8/cartItems/QYNr55mgDYETNVRrwGLR");

//
// QUERY ALL CART ITEMS:
firestore.collection("/users/rzWVFNHJIL2qJmUlzRB8/cartItems");
