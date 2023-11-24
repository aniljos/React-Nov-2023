import React from "react";

export interface ThemeState{
    mode: string;
}

export const initialTheme: ThemeState = {
    mode: "dark"
}


//creates the context
export const AppThemeContext = React.createContext(initialTheme);