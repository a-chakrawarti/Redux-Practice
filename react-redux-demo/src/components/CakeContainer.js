import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

const CakeContainer = (props) => {
  return (
    <>
      <h3>No of Cakes: {props.numOfCakes}</h3>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
};

// Whenever want to access redux state in component
const mapStateToProps = (state) => {
  return {
    // maps props.numOfCakes to state.numOfCakes
    numOfCakes: state.numOfCakes,
  };
};

// For dispatching
const mapDispatchToProps = (dispatch) => {
  return {
    // maps dispatch(buyCake()) to a prop on left side "buyCake"
    buyCake: () => dispatch(buyCake()),
  };
};

// Connects react components to redux store, connects cakeContainer to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
