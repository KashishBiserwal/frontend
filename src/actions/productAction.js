import axios from "axios";
import {
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_REQUEST,
    ALL_PRODUCTS_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstants";

export const getProduct = (keyword="", currentPage = 1, category) => async (dispatch) => {
    try {
        dispatch({type: ALL_PRODUCTS_REQUEST});
        let link = `https://backend-figurz.vercel.app/api/products?keyword=${keyword}&page=${currentPage}`;
        if(category){
            link = `https://backend-figurz.vercel.app/api/products?keyword=${keyword}&page=${currentPage}&category=${category}`;
        }
        const {data} = await axios.get(link);
        dispatch({type: ALL_PRODUCTS_SUCCESS, payload: data});
    } catch (error) {
        dispatch({type: ALL_PRODUCTS_FAIL, payload: error.response.data.message});
    }
}

export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: PRODUCT_DETAILS_REQUEST});
        const {data} = await axios.get(`https://backend-figurz.vercel.app/api/product/${id}`);
        dispatch({type: PRODUCT_DETAILS_SUCCESS, payload: data.product});
    } catch (error) {
        dispatch({type: PRODUCT_DETAILS_FAIL, payload: error.response.data.message});
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({type: CLEAR_ERRORS})
} 