import { createContext, useState } from "react";

export const AuthContext = createContext();


export const AuthProvider = (props) => {
    const calculateAuthenticatedData = () => {
        return localStorage.getItem("token") != null;
    }

    const [isAuthenticated, setIsAuthenticated] = useState(calculateAuthenticatedData());



    return <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {props.children}
    </AuthContext.Provider>
}
