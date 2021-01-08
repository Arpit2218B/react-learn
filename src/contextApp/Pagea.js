import React from 'react';
import Counter from './Counter';
import ThemeProvider from './ThemeProvider';
import Todo from './Todo';
import { initialState, reducer } from './reducer';

const Pagea = () => {
    return (
        <>
            <ThemeProvider initialState={initialState} reducer={reducer}>
                <Todo />
                <Counter />
            </ThemeProvider>
        </>
    )
}

export default Pagea;