import React from 'react';
import { useSelector } from 'react-redux';

const style = {
    'display': 'flex',
    'flex-direction': 'row',
    'flex-wrap': 'wrap',
    'justify-content': 'space-evenly'
}

const productStyle = {
    'backgroundColor': 'rgba(10, 10, 10, 0.2)',
    'margin': '20px',
    'padding': '20px',
    'width': 'fit-content'
}

const Cart = () => {
    const cartData = useSelector(data => data.cart);

    return (
        <div>
            <h1>Cart : {cartData.length || 0}</h1>
            <div style={style}>
                {
                    cartData.map(cartItem => (
                        <div style={productStyle}>
                            <h1>{cartItem.name}</h1>
                            <button>REMOVE FROM CART</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cart;