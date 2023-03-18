import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import {productDetailsReducer, productReducer} from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
let initialState = {
    cart:{
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []
    }
};

const store = configureStore({
    reducer: {
        products: productReducer,
        productDetails: productDetailsReducer,
        user: userReducer,
        cart: cartReducer
    },
    initialState
});
export default store;