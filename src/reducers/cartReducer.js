import {ADD_TO_CART, REMOVE_ITEM, EMPTY_CART} from "../constants/cartConstants";

export const cartReducer = (state = {cartItems: []}, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === item.product);
            if(existItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
                }
            }else{
                return {...state, cartItems: [...state.cartItems, item]}
            }

        case EMPTY_CART:
            return {...state, cartItems: []}

        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(i => i.product !== action.payload),
            };

        default:
            return state;
    }
}