import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux";

// useSelector is a react-redux hook, equivalent to mapStateToProps,
// accepts a function as parameter and is called selector function

const HooksCakeContainer = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  // returns a reference to the dispatch function from the redux store
  const dispatch = useDispatch();
  return (
    <div>
      <h2>No of Cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
};

export default HooksCakeContainer;
