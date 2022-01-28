import {
    AUTH
  } from "../constants/actionTypes";
  import * as api from "../api";

export const signin =  (formData, history) => async (dispatch) => {
    try {
        //sign in
        history.push('/')
    } catch(err) {
        console.log(err)
    }
}
export const signup = (formData, history) => async (dispatch) => {
    try {
        //sign up
        history.push('/')
    } catch(err) {
        console.log(err)
    }
}