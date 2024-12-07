// src/context/GrootAlertContext.js
import React, { createContext, useState, useContext } from 'react';

const GrootAlertContext = createContext();

export const GrootAlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);

    const showAlert = ({ type, text, showClose }) => {
        setAlert({ type, text, showClose });
        if (!showClose) {
            setTimeout(() => setAlert(null), 4000); // Auto-close after 4 seconds
        }
    };

    return (
        <GrootAlertContext.Provider value={{ showAlert }}>
            {children}
            {alert && (
                <div className={`alert ${alert.type}`}>
                    {alert.text}
                    {alert.showClose && <button onClick={() => setAlert(null)}>Close</button>}
                </div>
            )}
        </GrootAlertContext.Provider>
    );
};

export const useGrootAlert = () => useContext(GrootAlertContext);
