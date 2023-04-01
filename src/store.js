import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./reducers/cartReducer";
import {productDetailsReducer, productReducer} from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";

const store = configureStore({
    reducer: {
        products: productReducer,
        productDetails: productDetailsReducer,
        user: userReducer,
        cart: cartReducer
    },
    preloadedState: {
        cart: {
            cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
        },
        user: {
            user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null,
        }
    }
});
export default store;