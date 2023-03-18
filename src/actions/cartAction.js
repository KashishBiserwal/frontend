import {ADD_TO_CART} from "../constants/cartConstants";
import axios from "axios";

export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
    const { data } = await axios.get(`https://backend-figurz.vercel.app/api/product/${id}`);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            product: data.product._id,
            name: data.product.name,
            image: data.product.images[0], 
            price: data.product.price,
            stock: data.product.stock,
            quantity 
        } 
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}