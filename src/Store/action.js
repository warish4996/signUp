
import * as actionTypes from "./actionType";

/**
 * Action function for get all team members
 * @param  {Object} payload api payload data
 * @param  {function} callBackConfirmation callback function
 */

export const singUpDataAction = (paylod,callBackConfirmation) => {
  return async (dispatch) => {
    window.localStorage.setItem('signUPData', JSON.stringify(paylod));
      dispatch({
        type: actionTypes.SING_UP,
        payload: paylod,
      });
      const response='done'
      callBackConfirmation(response)
  };
};