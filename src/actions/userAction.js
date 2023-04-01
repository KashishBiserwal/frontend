import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from "../constants/userContstants"
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
    try{
        dispatch({
            type: LOGIN_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "https://backend-figurz.vercel.app/api/login",
            { email, password },
            config
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data, 
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
    }catch(error){
        alert("Login Failed. Check your email and password.")
        dispatch({
            type: LOGIN_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}

export const register = (userData) => async (dispatch) => {
    try{
        dispatch({
            type: REGISTER_REQUEST    
        });
        const config = { headers: { "Content-Type": "application/json" } };
        const { data } = await axios.post("https://backend-figurz.vercel.app/api/register", userData, config);
        dispatch({
            type: REGISTER_SUCCESS, payload: data  
        });
        alert("Register Successfull")
    }catch(error){
        alert("Register Failed. Password must be at least 8 characters.")
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}

export const loadUser = () => async (dispatch) => {
    try{
        dispatch({
            type: LOAD_USER_REQUEST,
        });

        const { data } = await axios.get("https://backend-figurz.vercel.app/api/me");

        dispatch({
            type: LOAD_USER_SUCCESS,
            payload: data, 
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
    }catch(error){
        dispatch({
            type: LOAD_USER_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}

export const logout = () => async (dispatch) => {
    try {
      await axios.post("https://backend-figurz.vercel.app/api/logout");
      dispatch({ type: LOGOUT_SUCCESS });
      alert("Logout Successfull")
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
      alert("Logout Failed")
    }
  };