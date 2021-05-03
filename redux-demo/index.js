console.log("From index js");

// import redux from 'redux'
const redux = require("redux");

// Redux Logger: Middleware
const reduxLogger = require("redux-logger");

// Middleware
const logger = reduxLogger.createLogger();

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

// Action
// Action Creator is a function that returns an action

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "Buy IceCream",
  };
}

// Reducer, (prevState, action) => newState

const initialState = {
  numOfCakes: 10,
  numOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        // Copy of the state object
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    case BUY_ICECREAM:
      return {
        // Copy of the state object
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

// Multiple reducer

const store = createStore(reducer, applyMiddleware(logger)); // 1st executed
console.log("Initial State: ", store.getState());
const unsubscribe = store.subscribe(
  () => {}
  //   console.log("Updated State: ", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
