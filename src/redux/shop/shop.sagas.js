/*import { takeEvery, call, put } from "redux-saga/effects";
//put is the saga effect for creating actions - it's the same as dispatch

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
    // call is the effect inside of our generator function that invokes the method
    // 1st argument: the function/method call
    // 2nd argument: the parameters that u pass into that function call
    // we use call() in case we want to yield that function call value at some point,
    // like it takes to long to load, so that we can difer the control of that call
    // back to the Saga middleware, so that we can cancel that call
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }

  // WE USE -TRY & CATCH- IN SAGAS GENERATOR FUNCTIONS
  // SAGAS DO NOT DISPATCH ACTIONS USING THE DISPATCH KEYWORD
  // IT USES IT'S SPECIFIC EFFECT: PUT
  // PUT: Saga effect for creating actions - MUST BE YIELD - will create an obj

  //SAME AS REDUX-THUNK CODE:

  //collectionRef
  //  .get()
  //  .then((snapshot) => {
  //    const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //    dispatch(fetchCollectionsSuccess(collectionsMap));
  //  })
  //  .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}*/

//AFTER 201
import { takeLatest, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
