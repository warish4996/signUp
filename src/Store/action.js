
import React from 'react'
import * as actionTypes from "./actionType";
import axios from 'axios';


const baseUrl='https://form-api11.herokuapp.com/form'

/**
 * Action function for add team members
 * @param  {Object} payload api payload data
 * @param  {function} callBackConfirmation callback function
 */

export const postSingUpData = (paylod,callBackConfirmation) => {
  return async (dispatch) => {
    try{
      const response = await axios({
        method: 'POST',
        data: paylod,
        url: `${baseUrl}`,
        
    });
    callBackConfirmation(response);
    }catch(err){
      callBackConfirmation(err);
    }     
  };
};

/**
 * Action function for delete team members
 * @param  {Object} id api payload data
 * @param  {function} callBackConfirmation callback function
 */

export const deleteSingUpData = (id,callBackConfirmation) => {
  return async (dispatch) => {
    try{
      const response = await axios({
        method: 'DELETE',
        url: `${baseUrl}/${id}`
    });
    callBackConfirmation(response); 
    }catch(err){
      callBackConfirmation(err);
    }     
  };
};


/**
 * Action function for get all team members
 */

export const getAllSingUpData = () => {
  return async (dispatch) => {
    try{
      const response = await axios({
        method: 'GET',
        url: baseUrl
    });
    dispatch({
      type: actionTypes.SING_UP,
      payload: response.data,
    });
    }catch(err){
      dispatch({
        type: actionTypes.SING_UP,
        payload: err,
      });
    }     
  };
};


/**
 * Action function for Edit team members
 * @param  id api id
 * @param  {function} callBackConfirmation callback function
 */

export const EditSingUpData = (paylod,id,callBackConfirmation) => {
  return async (dispatch) => {
    try{
      const response = await axios({
        method: 'PUT',
        data: paylod,
        url: `${baseUrl}/${id}`,
        
    });
    callBackConfirmation(response);
    }catch(err){
      callBackConfirmation(err);
    }     
  };
};