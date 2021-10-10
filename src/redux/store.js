/*import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [];

//APPLY MIDDLEWARES (aparecer no console) ONLY IN DEVELOPMENT
//não vão aparecer no site
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistStore };

//the persistor is the persisted version of our store*/

//AFTER 189
import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// export default { store, persistStore }; THIS WAS LEFTOVER CODE YIHUA FORGOT TO REMOVE ALL ALONG XD

//
// REDUX-THUNK
// it's a piece of middleware that allows us to fire functions
