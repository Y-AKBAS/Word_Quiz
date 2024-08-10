import {useContext} from "react";
import {AppContext} from "../contexts/AppContext.tsx";

function useAppContext() {
    const appContext = useContext(AppContext)
    if (!appContext) throw new Error('useAppContext must be used within useAppContext')
    return appContext;
}

export default useAppContext;