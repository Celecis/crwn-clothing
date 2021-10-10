import ShopActionTypes from "./shop.types";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionsStart());

    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  };
};

// INSTEAD OF CREATING AN ACTION THAT RETURNS AN ACTION OBJ
// ACTION === JAVASCRIPT OBJ
//
// WITH THUNK, WE ARE WRTTING A FUNCTION THAT RETURNS A FUNCTION WITH DISPATCH IN IT
// so that whenever dispatch is called, it will fire multiple actions
//
// in fetchCollectionsStartAsync({}) we wan't to do all the async functionality that we had in our shop component
// importing firestore and convertCollectionsSnapshotToMap
// once fetchCollectionsStartAsync get's called/starts, we will dispatch our fetchCollectionsStart() call
// redux will go trought the function and instantiate it the moment we call it
// it will create the collectionRef and then dispatch fetchCollectionsStart()
// which will change our reducer state isFetching to true - { isFetching: true } - and then
// it will begin the async request .get()

// after it has been sucessful we will dispatch fetchCollectionsSucess() with our collectionsMap
// that get's as it's payload our collectionsMap
// changing our reducer state collections to that collectionsMap - { collections: [collectionsMap] }
//
// if our async request .get() fails, we will catch that error and dispatch fetchCollectionsFailure()
// with the error message, that gets as it's payload our errorMessage
// changing our reducer state collections to that errorMessage - { errorMessage: [errorMessage] }
