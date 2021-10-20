import { all, call } from "redux-saga/effects";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import { userSagas } from "./user/user.sagas";

export default function* rootSaga() {
  yield all([call(fetchCollectionsStart), call(userSagas)]);
}

// all takes an array of Sagas, and with calling them,
// will run those Sagas concurrently
// can take multiple call functions, initializing multiple tasks
