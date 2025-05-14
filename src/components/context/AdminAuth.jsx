import { createContext, useState } from "react";

export const AdminAuthContext = createContext();

export const AdminAuthProvider = ({ children }) => {
    const storedAdminInfo = localStorage.getItem('adminInfo');
    const [user, setUser] = useState(storedAdminInfo);
    
    const login = (user) => {
        setUser(user);
    };

    const logout = () => {
        localStorage.removeItem('adminInfo');
        setUser(null);
    };

    return (
        <AdminAuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
};
// // import React from 'react'