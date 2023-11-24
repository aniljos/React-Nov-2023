import React, { useReducer } from "react";

export interface ThemeState{
    mode: string;
    dispatch? : (action: any) => void
}

export const initialTheme: ThemeState = {
    mode: "light"
    
}


//creates the context
export const AppThemeContext = React.createContext(initialTheme);

const reducer = (currentState: ThemeState, action: any) => {

    if(action.type === "SET_DARK"){
        return {
            ...currentState,
            mode: "dark"
        }
    }

    if(action.type === "SET_LIGHT"){
        return {
            ...currentState,
            mode: "light"
        }
    }

    return currentState;
}

function AppThemeProvider(props: any){

    const [state, dispatch] = useReducer(reducer, initialTheme);

    return (
        <AppThemeContext.Provider value={{mode: state.mode, dispatch: dispatch}}>
            {props.children}
        </AppThemeContext.Provider>
    )
}

export default AppThemeProvider;