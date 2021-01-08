export const initialState = {
    theme: true,
    counter: 1
};

export const reducer = (state, action) => {
    if(action.type == 'INCREMENT_COUNTER')
    {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    return {
        ...state,
        theme: !state.theme
    }
}