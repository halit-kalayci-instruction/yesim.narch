import { createContext } from "react";

export const LoaderContext = createContext();

export const LoaderProvider = (props) => {
    return <LoaderContext.Provider>{props.children}</LoaderContext.Provider>
}