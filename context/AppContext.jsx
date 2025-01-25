import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [usuarios, setUsuarios] = useState([]);
    
    const agregarUsuario = (usuario) => {
        setUsuarios(prev => [...prev, usuario]);
    };

    const eliminarUsuario = (id) => {
        setUsuarios(prev => prev.filter(user => user.id !== id));
    };

    return (
        <AppContext.Provider value={{ usuarios, agregarUsuario, eliminarUsuario }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = () => useContext(AppContext);

