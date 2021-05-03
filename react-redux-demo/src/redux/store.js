import { createStore } from "redux";
// import cakeReducer from "./cake/cakeReducer";
import rootReducer from "./rootReducer";

// Can accept only one reducer but using combineReducer
// we can pass multiple reducer
const store = createStore(rootReducer);

export default store;
