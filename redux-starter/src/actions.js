// Action Creator

import * as actions from "./actionTypes";

export function bugAdd(description) {
  return {
    type: actions.BUG_ADD,
    payload: {
      description,
    },
  };
}

export function bugRemoved() {
  return {
    type: actions.BUG_REMOVED,
    payload: {
      id: 1,
    },
  };
}

export function bugResolved(id) {
  return {
    type: actions.BUG_RESOLVED,
    payload: {
      id,
    },
  };
}
