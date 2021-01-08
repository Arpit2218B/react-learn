import React, { useEffect, useRef } from 'react';
import { useThemeValue } from './ThemeProvider';

const Counter = () => {
    console.log(useThemeValue());
    const [{ counter }, dispatch] = useThemeValue();
    const number = useRef(1);

    useEffect(() => {
        number.current = number.current + 1
    })

    return (
        <div>
            <h1>Counter : {counter}</h1>
            <h2>I am rendered {number.current} times</h2>
            <button onClick={() => dispatch({
                'type': 'INCREMENT_COUNTER'
            })}>INCREMENT COUNTER</button>
            <hr />
        </div>
    )
}

export default Counter;