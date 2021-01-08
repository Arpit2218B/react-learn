import React from 'react';
import { Provider } from 'react-redux';
import Cart from './Cart';
import Items from './Items';
import store from './store';

const Pageb = () => {
    return (
        <>
            <Provider store={store}>
                <h1>Redux shopping cart</h1>
                <Items />
                <Cart />
            </Provider>
        </>
    )
}

export default Pageb;