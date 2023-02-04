import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
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
            "/api/users/login",                  //
            { email, password },
            config
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: data,  //data.user
        });

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