import React, {createContext, useReducer, ReactNode} from 'react';
import {State, Action} from './types';
import {reducer, initialState} from './reducer';

type ContextType = {
    state: State;
    dispatch: React.Dispatch<Action>;
};

export const AppContext = createContext<ContextType | undefined>(undefined);

type AppProviderProps = {
    children: ReactNode;
};

export const AppProvider = ({children}: AppProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    );
};
