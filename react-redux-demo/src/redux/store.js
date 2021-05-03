import { createStore, applyMiddleware } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";

// Can accept only one reducer but using combineReducer
// we can pass multiple reducer
const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
