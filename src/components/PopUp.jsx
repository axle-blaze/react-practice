import React from "react";

// SOme mnor changes


const PopUp = ({ message, onClose }) => (
    <div className="popup-overlay">
        <div className="popup-content">
            <span>{message}</span>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
);

export default PopUp;