import { takeLatest, put, all, call } from "redux-saga/effects";
import UserActionTypes from "./user.types";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase.utils";

import { googleSignInSuccess, googleSignInFailure } from "./user.actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    // console.log(userRef);
    // {user: Dm, credential: Gg, additionalUserInfo: mg, operationType: 'signIn'}
    // the user property is the same userAuth that we used to pass in with redux-thunk in our App.js componentDidMount()
    const userRef = yield call(createUserProfileDocument, user);
    // this is the same as const userRef = await createUserProfileDocument(userAuth)
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      //put() puts things back into our regular Redux flow
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
