import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ACTIONS from './actionConstants';

const style = {
    'display': 'flex',
    'flex-direction': 'row'
}

const productStyle = {
    'backgroundColor': 'rgba(10, 10, 10, 0.2)',
    'margin': '20px',
    'padding': '20px',
    'width': 'fit-content'
}

const Items = () => {
    const products = useSelector(data => data.products);
    const dispatch = useDispatch();

    const renders = useRef(0);

    const addToCart = (product) => {
        dispatch({
            'type': ACTIONS.ADD_PRODUCT,
            'payload': product
        })
    }

    return (
        <div>
            <p>Renders : {++renders.current}</p>
            <div style={style}>
                {
                    products.map(product => (
                        <div style={productStyle}>
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                            <button onClick={() => addToCart(product)}>ADD TO CART</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Items;