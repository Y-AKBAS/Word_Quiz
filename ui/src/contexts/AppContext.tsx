import React, {createContext, useState} from "react";


export enum AppMode {
    UNKNOWN = "UNKNOWN",
    TRAINING = "TRAINING",
    EXAM = "EXAM"
}

interface AppContextInfo {
    mode: AppMode;
    setMode:  React.Dispatch<React.SetStateAction<AppMode>>
}

export const AppContext = createContext<AppContextInfo | null>(null);

export function AppContextProvider({children}: { children: React.ReactNode }) {
    const [mode, setMode] = useState<AppMode>(AppMode.UNKNOWN);

    const context = {
        mode: mode,
        setMode: setMode
    }
    return <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>
}
