import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import type { User, AuthContextType} from "../types";
import api from "../api/axiosConfig";

// Creates the context object which will hold our global auth state
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Any component inside AuthProvider will have access to the auth data
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Current user data (id, username, email)
    const [user, setUser] = useState<User | null>(null);
    //The JWT Access Token (retrieved initially from the browser's storage)
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
    //Prevents the app from flickering or showing "Not Logged In" while we check storage
    const [loading, setLoading] = useState(true);


    //Runs once when the app loads.
    //It checks if the user was previously logged in by looking at localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        //If a user and a token are fround, we restore the session
        if(savedUser && token){
            try {
            setUser(JSON.parse(savedUser));
        } catch (error){
            //If the data in storage is corrupted, we clear it
            localStorage.removeItem('user');
        }
    }
   //Once checked, we stop the loading state
    setLoading(false);
    }, [token]);


    //login: Function to update the state after a successful login API call
    const login = (newUser: User, newToken: string) => {
        setUser(newUser);
        setToken(newToken);

        //We save to localStorage so the session survives a page refresh
        localStorage.setItem('token', newToken);
        localStorage.setItem('user', JSON.stringify(newUser));
    };

    //logout: Clears the session on both the backend and frontend.
    const logout = async () => {
        try {
            await api.post('/auth/logout'); //Tell backend to clear cookies
        } catch (error) {
            console.error("Logout error", error);
        } finally {
            //Regardless of backend success, we clear the frontend state
            setUser(null);
            setToken(null);

            //Wipe the browser's storage
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }
    };

    //We return the Provider which wraps our app and shares the values
    // All children components can now consume user, token, login, logout, and loading
    return (
        <AuthContext.Provider value={{ user, token, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};


//Custom hook for easy access
//Instead of importing 'useContext' and 'AuthContext' every time, we just call 'useAuth()' in our components
export const useAuth = () => {
    const context = useContext(AuthContext);
    //Safety Check: if you use useAuth() outside of the provider, it will throw an error
    if(!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

