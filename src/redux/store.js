import { createStore } from 'redux';
import ACTIONS from './actionConstants';

const initialState = {
    products: [
        {
            name: 'a',
            price: 2000
        },
        {
            name: 'b',
            price: 3000
        },
        {
            name: 'c',
            price: 4000
        },
        {
            name: 'd',
            price: 5000
        },
    ],
    cart: []
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ACTIONS.SET_PRODUCTS:
            return {
                ...state
            }
        case ACTIONS.ADD_PRODUCT:
            return {
                ...state,
                cart: [...state.cart, action.payload] 
            }
        case ACTIONS.REMOVE_PRODUCT:
            return {
                ...state
            }
        default:
            return state;
    }
}

const store = createStore(reducer);

export default store;