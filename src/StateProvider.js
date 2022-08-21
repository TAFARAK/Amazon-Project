import { createContext, useContext, useReducer } from "react";

// Prepares my data layer
export const StateContext = createContext();

// wrap or app and provide the data layer
export const StateProvider =(reducer, initialState,Children) =>(
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {Children}
    </StateContext.Provider>
    
)

// pull information from data layer
export const useStatevalue = () => useContext(StateContext);