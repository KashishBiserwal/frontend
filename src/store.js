import { configureStore } from "@reduxjs/toolkit";
import {productDetailsReducer, productReducer} from "./reducers/productReducer";
let initialState = {};

const store = configureStore({
    reducer: {
        products: productReducer,
        productDetails: productDetailsReducer
    },
    initialState
});
export default store;