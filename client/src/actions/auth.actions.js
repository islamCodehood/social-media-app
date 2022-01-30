import {
    AUTH
  } from "../constants/actionTypes";
  import * as api from "../api";

export const signin =  (formData, navigate) => async (dispatch) => {
    try {
        //sign in
        const {data} = await api.signin(formData)
        dispatch({ type: AUTH , payload: data });
        navigate("/", { replace: true });
    } catch(err) {
        console.log(err)
    }
}
export const signup = (formData, navigate) => async (dispatch) => {
    try {
        //sign up
        const {data} = await api.signup(formData)
        dispatch({ type: AUTH , payload: data });
        navigate("/", { replace: true });
    } catch(err) {
        console.log(err)
    }
}