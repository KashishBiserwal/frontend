import { configureStore } from "@reduxjs/toolkit";
import {productDetailsReducer, productReducer} from "./reducers/productReducer";
import { userReducer } from "./reducers/userReducer";
let initialState = {};

const store = configureStore({
    reducer: {
        products: productReducer,
        productDetails: productDetailsReducer,
        user: userReducer
    },
    initialState
});
export default store;