import * as actionTypes from "./actionType";

/**
 * Reducer initial state
 */
const initialState = {
  singUpData: [],
};

/**
 * Reducer function for admin product actions
 * @param  {Object} state inintal state
 * @param  {Object} action dispatched action from redux store update
 */
export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SING_UP:
      return {
        ...state,
        singUpData: payload,
      };
    default:
      return state;
  }
};
