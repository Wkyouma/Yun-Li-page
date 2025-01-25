import React, { createContext, useState, useEffect, useContext } from 'react';

// Cria o contexto
const ResponsiveContext = createContext();

// Provedor do contexto
const ResponsiveProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ResponsiveContext.Provider value={{ isMobile }}>
            {children}
        </ResponsiveContext.Provider>
    );
};

// Hook para usar o contexto
const useResponsive = () => {
    return useContext(ResponsiveContext);
};

export { ResponsiveProvider, useResponsive };