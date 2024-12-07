// src/components/GrootAlert.jsx
import React, { useEffect, useState } from 'react';
import '../styles/grootify.css'

const GrootAlert = ({ type = 'info', text, showClose = true, onClose }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (!showClose) {
            const timer = setTimeout(() => setVisible(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [showClose]);

    if (!visible) return null;

    const typeStyles = {
        success: 'grootify-success',
        error: 'grootify-error',
        info: 'grootify-info',
        warning: 'grootify-warning',
    };

    return (
        <div className={`grootify-alert ${typeStyles[type]}`}>
            <span>{text}</span>
            {showClose && (
                <button className="grootify-close  bg-yellow-500 grootify-alert" onClick={() => {
                    setVisible(false);
                    onClose?.();
                }}>
                    &times;
                </button>
            )}
        </div>
    );
};

export default GrootAlert;
