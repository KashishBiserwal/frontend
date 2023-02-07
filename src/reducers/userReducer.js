import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from "../constants/userContstants"

export const userReducer = (state = {user: {}}, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
            return {
                loading: true,
                isAuthenticated: false,
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:     
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload.user,
            };
        case LOGIN_FAIL:
        case REGISTER_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        default:
            return state;
    }
}