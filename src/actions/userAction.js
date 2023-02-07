import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
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
        alert("Login Successfull")
        
        localStorage.setItem("userInfo", JSON.stringify(data));
    }catch(error){
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
            type: REGISTER_REQUEST,     ///////////////////////////  ERROR HERE in this whole part
        })
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };
        const { data } = await axios.post("https://backend-figurz.vercel.app/api/register", userData, config);
        dispatch({
            type: REGISTER_SUCCESS, payload: data  
        })
        alert("Register Successfull")
    }catch(error){
        console.log(error);
        dispatch({
            type: REGISTER_FAIL,
            payload: error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
        });
    }
}
