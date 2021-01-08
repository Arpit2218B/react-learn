import { useContext, useReducer } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    return (
        <ThemeContext.Provider value={useReducer(props.reducer, props.initialState)}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export const useThemeValue = () => useContext(ThemeContext);

export default ThemeProvider;