import * as actions from "./actionTypes";
let lastId = 0;

// Business Logic, pure function
function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADD:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== action.payload.id);

    // Becomes complex, thats why we need immutable libraries like Immer etc
    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}

export default reducer;
