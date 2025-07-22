import React from "react";
import "./PopUp.css";

// SOme mnor changes

// This is a simple popup component
// It can be used to display messages or alerts

/* PopUp.css */

const PopUp = ({ message, onClose, newData }) => (
    <div className="popup-overlay">
        <div className="popup-content">
            <span>{message}</span>
            <button onClick={onClose}>Close</button>
            <button onClick={() => newData("New Task")}>Add New Task</button>
            
        </div>
    </div>
);

export default PopUp;